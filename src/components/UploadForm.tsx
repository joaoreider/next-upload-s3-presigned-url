"use client"
import axios from 'axios'
import { CloudUpload } from 'lucide-react'
import React, { useState } from 'react'
import { getSignedURL } from '@/app/actions'
import uniqid from 'uniqid';

interface UploadFormProps {
  
}

export default function UploadForm(props: UploadFormProps ) {
    const [uploading, setUploading] = useState(false)
    const computeSHA256 = async (file: File) => {
      const buffer = await file.arrayBuffer();
      const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      return hashHex;
    };

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        if (!e.target.files) {
            return
        }

        // limit file size to 10MB
        if (e.target.files[0].size > 10 * 1024 * 1024 ) {
            console.log('File size is too large, please upload a file smaller than 10MB')
            return
        }

        const file = e.target.files[0]
        const id = uniqid();
        // Remember to create a bucket with public access & configure permissions:
        // https://www.youtube.com/watch?v=t-lhgq7Nfpc&t=49s

        setUploading(true)
        const signedURLResult = await getSignedURL({
          fileSize: file.size,
          fileType: file.type,
          checksum: await computeSHA256(file),
          key: file.name+'-'+id
        });
        if (signedURLResult.failure !== undefined) {
          console.error(signedURLResult.failure)
          return
        }
    
        const { url } = signedURLResult.success

        await axios.put(url, file, {
          headers: {
            'Content-Type': file.type,
          }
        })
        setUploading(false)


        const ext = file.name.split('.').slice(-1)[0];
        const newName = id + '.' + ext;
        console.log(newName)
      }
  return (
    <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 cursor-pointer">
        {uploading && <span className='text-white'>Uploading...</span>}
        <CloudUpload className="h-6 w-6" />
        {!uploading && <span>Upload Video</span>}
        <input type="file" className="bg-red-400 hidden" onChange={handleUpload} />
    </label>
  )
}
