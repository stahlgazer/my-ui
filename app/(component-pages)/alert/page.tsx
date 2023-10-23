import { AlertCircle } from "lucide-react";

export default function AlertExample() {
  return (
    <div
      role="alert"
      className="flex items-center justify-center rounded-md border-2 border-black bg-[#bc95d4] p-5 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m750:px-5"
    >
      <AlertCircle className="mr-3 h-6 min-h-[24px] w-6 min-w-[24px]" />
      Lorem ipsum dolor sit amet
    </div>
  );
}
