import { CloudUpload } from "lucide-react";
import DemoSection from "../components/DemoSection";
import PageHeaders from "@/components/PageHeaders";

export default function Home() {
  return (
    <>
      <PageHeaders h1Text="Add epic captions to your videos" h2Text="Just upload your video and we will do the rest" />
      <div className="text-center">
        <button className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2">
          <CloudUpload className="h-6 w-6" />
        Choose file
        </button>
      </div>
      < DemoSection />
    </>

  );
}
