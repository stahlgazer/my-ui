import Link from "next/link";
import Image from "next/image";
import logo from "@/app/myui.png"

const Introduction = () => {
  return (
    <div>
      <Image alt="logo" src={logo} width={200} height={200} className="m-auto"/> 
      <h2><span className="text-fuchsia-500">MyUI </span>presents a collection of type-safe components
        meticulously crafted for React using Tailwind CSS.
      </h2>
      <p className="lg:w-2/3 p-2 my-0 m-auto">
        Create flair through a diverse array of component styles without the
        need for additional downloads or dependencies. Departing from conventional
        design norms, it embraces simplicity in its unadorned design elements and
        warmly welcomes users to choose the theme of components they would like to
        use interchangeably. This collection of components serves as a way for
        those seeking to add effortlessly unique styling to your application while
        giving you the control to make changes. Open source and free to use
        forever. We welcome contributors on our GitHub if you would like to
        contribute your design to MyUI. Thank you and enjoy!
      </p>
      <Link href="/usage">
        <button className="transition ease-in-out m-8 border-2 border-fuchsia-500 rounded-lg p-2 hover:border-white hover:text-fuchsia-500 hover:ease-linear">Get Started</button>
      </Link>
    </div>
  );
};

export default Introduction;
