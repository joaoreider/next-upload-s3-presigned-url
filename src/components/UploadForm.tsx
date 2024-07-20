"use client"
import axios from 'axios'
import { CloudUpload } from 'lucide-react'
import React from 'react'

interface UploadFormProps {
  
}

export default function UploadForm(props: UploadFormProps ) {

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        if (!e.target.files) {
            return
        }

        const file = e.target.files[0]

        // TODO: upload to S3
        // https://www.youtube.com/watch?v=t-lhgq7Nfpc&t=49s

        
    }

  return (
    <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 cursor-pointer">
        <CloudUpload className="h-6 w-6" />
        <span>Choose file</span>
        <input type="file" className="bg-red-400 hidden" onChange={handleUpload} />
    </label>
  )
}
