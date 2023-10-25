import { AlertCircle, Check, XCircle } from "lucide-react";

export default function Alert() {
  return (
    <section className="flex flex-col gap-2">
      <div
        role="alert"
        className="flex items-center justify-center rounded-md border-2 border-fuchsia-500 bg-gradient-to-r from-green-500 via-green-800 to-slate-800 text-xs lg:text-base p-2 px-4 lg:p-2 lg:px-8 font-bold m-auto"
      >
        Success
        <Check className="ml-4 h-4 lg:h-6 animate-pulse text-green-500" />
      </div>
      <div
        role="alert"
        className="flex items-center justify-center rounded-md border-2 border-fuchsia-500 bg-gradient-to-r from-yellow-500 via-yellow-800 to-slate-800 text-xs lg:text-base p-2 px-4 lg:p-2 lg:px-8 font-bold m-auto"
      >
        Warning
        <AlertCircle className="ml-4 h-4 lg:h-6 animate-pulse text-yellow-500" />
      </div>
      <div
        role="alert"
        className="flex items-center justify-center rounded-md border-2 border-fuchsia-500 bg-gradient-to-r from-red-500 via-red-800 to-slate-800 text-xs lg:text-base p-2 px-4 lg:p-2 lg:px-8 font-bold m-auto"
      >
        Failed
        <XCircle className="ml-4 h-4 lg:h-6 animate-pulse text-red-500" />
      </div>
    </section>
  );
}
