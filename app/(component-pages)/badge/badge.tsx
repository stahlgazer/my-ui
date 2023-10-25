import { Dot } from "lucide-react";

export default function Badge() {
  return (
    <div className="flex items-center rounded-full border-2 border-fuchsia-500 bg-black text-white shadow-sm shadow-white px-4 py-2 text-sm font-semibold">
      <h4>Badge</h4>
      <Dot className="animate-ping text-fuchsia-500" />
    </div>
  );
}
