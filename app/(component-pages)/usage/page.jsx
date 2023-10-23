"use client";
import { Copy } from "lucide-react";
import Information from "@/app/(component-pages)/usage/information"
import Link from "next/link";

const Usage = () => {
  return (
    <div>
      These React components require the following dependencies:{" "}
      <span className="font-semibold">
        TypeScript, TailwindCSS, Lucide-React
      </span>
      <div className="bg-slate-200 w-5/6 lg:w-1/2 p-2 rounded-lg flex justify-between  my-4 m-auto">
        <pre className="text-fuchsia-500 ml-4">
          <code>npm install lucide-react</code>
        </pre>
        <button
          onClick={() => {
            navigator.clipboard.writeText("npm install react-icons --save");
          }}
          className="text-black hover:text-fuchsia-500 focus:ring-2 focus:ring-green-400"
        >
          <Copy />
        </button>
      </div>
      <div className="bg-slate-200 w-5/6 lg:w-1/2 p-2 rounded-lg flex justify-between my-4 m-auto">
        <pre className="text-fuchsia-500 ml-4">
          <code>npm install -D typescript</code>
        </pre>
        <button
          onClick={() => {
            navigator.clipboard.writeText("npm install -D typescript");
          }}
          className="text-black hover:text-fuchsia-500 focus:ring-2 focus:ring-green-400"
        >
          <Copy />
        </button>
      </div>
      <p>Tailwind installation depends on your framework and runtime, see docs: <a
        className="text-blue-300 hover:text-fuchsia-500"
        target="_blank"
        href="https://tailwindcss.com/docs/installation"
      >
        https://tailwindcss.com/docs/installation
      </a></p>
      <p className="mt-8 text-gray-400 max-w-2xl m-auto">
        If you would like to use another set of icons, feel free to replace them with ones of your choice. The purpose of <span className="text-fuchsia-500">MyUI </span> is granting you the
        privilege of hand-picking the theme that aligns with your vision.
        Effortlessly integrate your chosen component directly into your project!
        It&apos;s essential to remember that these components are yours to
        mold—reusable and accessible, their potential is in your capable hands.
      </p>
      <Link href="/accordion">
        <button className="transition ease-in-out m-8 border-2 border-fuchsia-500 rounded-lg p-2 hover:border-white hover:text-fuchsia-500 hover:ease-linear">Components</button>
      </Link>
      <Information />
    </div>
  );
};
export default Usage;
