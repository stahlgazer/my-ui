import Image from "next/image";
import logo from "@/app/myui.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="ml-[160px] md:ml-[190px] lg:ml-[320px] text-center md:h-screen flex flex-col justify-center items-center">
      <Image
        alt="logo"
        src={logo}
        width={250}
        height={250}
        className="animate-bounce"
      />
      <h1 className="text-2xl font-bold underline decoration-fuchsia-500">
        Amazingly Simple React Components using TailwindCSS.
      </h1>
      <Link href="/introduction">
        <button className="transition ease-in-out m-8 border-2 border-fuchsia-500 rounded-lg p-2 hover:border-white hover:text-fuchsia-500 hover:ease-linear ">
          Documentation
        </button>
      </Link>
    </div>
  );
}
