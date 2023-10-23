import Image from "next/image";
import logo from "@/app/myui.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="ml-[160px] md:ml-[190px] lg:ml-[320px] text-center h-screen flex flex-col justify-center items-center">
      <Image
        alt="logo"
        src={logo}
        width={250}
        height={250}
        className="animate-bounce"
      />
      <h1 className="text-2xl font-bold">
        Amazingly Simple Components for React using TailwindCSS.{" "}
      </h1>
      <p className="font-semibold bg-gradient-to-r from-emerald-500 via-fuchsia-500 to-sky-500 py-2 px-4 rounded-md mt-6">
        Choose Between Your Favorite Themes
      </p>

      <Link href="/introduction">
        <button className="animate-background-shine transition ease-in-out m-8 border-2 border-fuchsia-500 rounded-lg p-2 hover:border-white hover:text-fuchsia-500 hover:ease-linear">
          Documentation
        </button>
      </Link>
    </div>
  );
}
