import { ArrowLeft } from "lucide-react";

function CallHeader() {
  return (
    <div className="flex items-center gap-5 px-5 pt-12 pb-5">

      <ArrowLeft className="w-7 h-7 cursor-pointer" />

      <h1 className="text-4xl font-medium">
        Call
      </h1>

    </div>
  );
}

export default CallHeader;