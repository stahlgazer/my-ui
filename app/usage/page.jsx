"use client";
import { useThemeStore } from "@/components/select-theme";
import { Copy } from "lucide-react";

const Usage = () => {
  const { theme } = useThemeStore();
  return (
    <div className="lg:ml-[350px] sm:ml-0 text-center m-14">
      MyUI Usage: These React components require the following dependencies:{" "}
      <span className="font-semibold">
        TypeScript, TailwindCSS, Lucide-React
      </span>

      <div className="bg-slate-200 w-1/2 p-2 rounded-lg flex justify-between m-auto my-4 ">
        <pre className={`${theme} ml-4`}>
          <code>npm install lucide-react</code>
        </pre>
        <button
          onClick={() => {
            navigator.clipboard.writeText("npm install react-icons --save");
          }}
          className="text-black hover:text-amber-500 focus:ring-2 focus:ring-green-400"
        >
          <Copy />
        </button>
      </div>
      <div className="bg-slate-200 w-1/2 p-2 rounded-lg flex justify-between m-auto my-4 ">
        <pre className="text-amber-800 ml-4">
          <code>npm install -D typescript</code>
        </pre>
        <button
          onClick={() => {
            navigator.clipboard.writeText("npm install -D typescript");
          }}
          className="text-black hover:text-amber-500 focus:ring-2 focus:ring-green-400"
        >
          <Copy />
        </button>
      </div>
      Tailwind installation depends on your framework and runtime, see docs:{" "}
      <a
        className="text-blue-300"
        target="_blank"
        href="https://tailwindcss.com/docs/installation"
      >
        https://tailwindcss.com/docs/installation
      </a>
      <p className="mt-8">
        Our component gallery beckons your exploration, granting you the
        privilege of hand-picking the theme that aligns with your vision.
        Effortlessly integrate your chosen component directly into your project!
        It&apos;s essential to remember that these components are yours to
        mold—reusable and accessible, their potential is in your capable hands.
      </p>
    </div>
  );
};
export default Usage;
