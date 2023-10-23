import { AlertCircle, Check, XCircle } from "lucide-react";

export default function Alert() {
  return (
    <section className="flex flex-col gap-2">
      <div
        role="alert"
        className="flex items-center justify-center rounded-md border-2 border-fuchsia-500 bg-black text-xs lg:text-base p-2 px-4 lg:p-4 lg:px-8 font-bold m-auto"
      >
        Subscribed
        <Check className="ml-4 h-4 lg:h-6 animate-pulse text-green-500" />
      </div>
      <div
        role="alert"
        className="flex items-center justify-center rounded-md border-2 border-fuchsia-500 bg-black text-xs lg:text-base p-2 px-4 lg:p-4 lg:px-8 font-bold m-auto"
      >
        Failed
        <XCircle className="ml-4 h-4 lg:h-6 animate-pulse text-red-500" />
      </div>

      <div
        role="alert"
        className="flex items-center justify-center rounded-md border-2 border-fuchsia-500 bg-black text-xs lg:text-base p-2 px-4 lg:p-4 lg:px-8 font-bold m-auto"
      >
        Warning
        <AlertCircle className="ml-4 h-4 lg:h-6 animate-pulse text-yellow-500" />
      </div>
    </section>
  );
}
