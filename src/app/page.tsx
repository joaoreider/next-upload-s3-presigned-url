import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";

export default function Home() {

  return (
    <>
      <PageHeaders h1Text="Upload file to AWS S3" h2Text="Pre-signed URL" />
      <div className="text-center">
        <UploadForm />
      </div>
    </>

  );
}
