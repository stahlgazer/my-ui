import Link from "next/link";

const Introduction = () => {
  return (
    <div className="ml-[210px] lg:ml-[350px] text-center m-14">
      <h2>MyUI presents a collection of type-safe components
        meticulously crafted for React using Tailwind CSS.
      </h2>
      <p>
        MyUI offers a
        refreshingly uncomplicated solution, empowering you to express your
        creative flair through a diverse array of component styles without the
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
        <button className="m-8">Usage</button>
      </Link>
    </div>
  );
};

export default Introduction;
