import { AlertCircle } from "lucide-react";

export default function Alert() {
  return (
    <div
      role="alert"
      className="flex items-center justify-center rounded-md border-2 border-white bg-fuchsia-500 p-5 px-8 font-bold w-1/2 m-auto"
    >
      <AlertCircle className="mr-3 h-6 min-h-[24px] w-6 min-w-[24px]" />
      Oh no, I&apos;m in danger!
    </div>
  );
}
