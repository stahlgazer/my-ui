import Link from "next/link";
import Image from "next/image";
import logo from "@/app/myui.png"

const Introduction = () => {
  return (
    <div>
      <Image alt="logo" src={logo} width={125} height={125} className="m-auto animate-pulse" />
      <h2>The only collection of components you will need again.
      </h2>
      <p className="lg:w-2/3 p-2 my-0 m-auto">
        Why <span className="text-fuchsia-500">MyUI </span>? The choice is in your hands to pick the style you want. Departing from conventional
        design norms, choose the theme of components that you would like to
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

export default Introduction;
