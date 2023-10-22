"use client";
import { Copy } from "lucide-react";

const Usage = () => {
  return (
    <div className="lg:ml-[350px] sm:ml-0">
      Usage: These React components require the following dependencies:{" "}
      <span className="font-semibold">
        TypeScript, TailwindCSS, Lucide-React
      </span>
      <div className="bg-slate-200 w-1/2 m-4 p-2 rounded-lg flex justify-between">
        <pre className="text-amber-500 ml-4">
          <code>npm install react-icons --save</code>
        </pre>
        <button
          onClick={() => {
            navigator.clipboard.writeText("npm install react-icons --save");
          }}
          className="text-black hover:text-amber-500"
        >
          <Copy />
        </button>
      </div>
      <div className="bg-slate-200 w-1/2 m-4 p-2 rounded-lg flex justify-between">
        <pre className="text-amber-500 ml-4">
          <code>npm install -D typescript</code>
        </pre>
        <button
          onClick={() => {
            navigator.clipboard.writeText("npm install -D typescript");
          }}
          className="text-black hover:text-amber-500"
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
      . Our component gallery beckons your exploration, granting you the
      privilege of hand-picking the theme that aligns with your vision.
      Effortlessly integrate your chosen component directly into your project!
      It&apos;s essential to remember that these components are yours to
      mold—reusable and accessible, their potential is in your capable hands.
    </div>
  );
};
export default Usage;
