import Link from "next/link";
import Image from "next/image";
import logo from "@/public/myui.png";

export default function Introduction() {
  return (
    <div>
      <Image alt="logo" src={logo} width={125} height={125} className="m-auto" />
      <h2>The only collection of components you will need again.
      </h2>
      <p className="animate-pulse text-white bg-gradient-to-r from-red-500 via-fuchsia-500 to-slate-800 py-2 px-4 rounded-md mt-6 border border-white shadow-md shadow-gray-300 max-w-xs m-auto my-4">
        Choose Your Component Style
      </p>
      <p className="lg:w-2/3 p-2 my-0 m-auto">
        Why <span className="text-fuchsia-500">MyUI</span>? The choice is in your hands to pick the style you want. Departing from conventional
        design norms, you get to choose the theme of components that you would like to
        use interchangeably. This collection of components serves as a way for
        you to add effortless and unique styling to your application while
        giving the control to easily make changes. Open source and free to use
        forever. We welcome contributors on our GitHub if you would like to
        contribute your design. Enjoy!
      </p>
      <Link href="/usage">
        <button className="transition ease-in-out m-8 border-2 border-fuchsia-500 rounded-lg p-2 hover:border-white hover:text-fuchsia-500 hover:ease-linear">Get Started</button>
      </Link>
    </div>
  );
};

