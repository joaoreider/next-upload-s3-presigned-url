"use server"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

type SignedURLResponse = { failure?: undefined; success: { url: string } } | { failure: string; success?: undefined }


if (
    !process.env.AWS_BUCKET_NAME
    || !process.env.AWS_BUCKET_REGION
    || !process.env.AWS_ACCESS_KEY
    || !process.env.AWS_SECRET_KEY
) {
    throw new Error("Missing required environment variables")
}


const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
})

export async function getSignedURL({
    fileType,
    fileSize,
    checksum,
    key,
  }: GetSignedURLParams): Promise<SignedURLResponse> {

  if (!allowedFileTypes.includes(fileType)) {
    return { failure: "File type not allowed" }
  }

  if (fileSize > MAX_FILE_SIZE) {
    return { failure: "File size too large" }
  }

  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: key,
    ContentType: fileType,
    ContentLength: fileSize,
    ChecksumSHA256: checksum,
    /* You can add metadata to the object: E.g.:
    Metadata: {
      userId: session.user.id
    }, */
  })

  const url = await getSignedUrl(
    s3Client,
    putObjectCommand,
    { expiresIn: 60 } // 60 seconds
  )
  console.log("[DEBUG] Signed URL:", url)
  return {success: {url}}
}

const allowedFileTypes = [
    "image/jpeg",
    "image/png",
    "video/mp4",
    "video/quicktime"
  ]

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

type GetSignedURLParams = {
fileType: string
fileSize: number
checksum: string
key: string
}

