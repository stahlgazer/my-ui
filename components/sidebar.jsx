import Image from "next/image";
import SelectBox from "./selectbox";
import Title from "./title";
import SectionsList from "./sections-list";
import Link from "next/link";

const Sidebar = () => {
    const data = {
        introduction: [{ name: "Introduction", href: "introduction" }, { name: "Usage", href: "usage" }],
        components: [{ name: "Accordion", href: "accordion" }, { name: "Alert", href: "alert" }, { name: "Avatar", href: "avatar" }, { name: "Badge", href: "badge" }, { name: "Button", href: "button" }, { name: "Card", href: "card" }, { name: "Checkbox", href: "checkbox" }, { name: "Sidebar", href: "sidebar" }, { name: "Dropdown", href: "dropdown" }, { name: "Image", href: "image" }, { name: "Input", href: "input" }, { name: "Slide", href: "slide" }, { name: "Modal", href: "modal" }, { name: "Newsletter", href: "newsletter" }, { name: "Radio", href: "radio" }, { name: "Select", href: "select" }, { name: "Tabs", href: "tabs" }, { name: "Textarea", href: "textarea" }, { name: "Tooltip", href: "tooltip" },]
    }

    return (
        <>
            <nav
                className="fixed z-40 top-0 left-0 lg:w-80 lg:h-full border-r bg-black space-y-8 sm:overflow-auto">
                <div className="sticky top-0 space-y-8 bg-white">
                    <div className='h-20 flex items-center px-4 border-b md:px-8'>
                        <Link href='/' className='flex justify-center items-center'>
                            <Image alt="my-ui logo" src="/favicon.ico" width={100} height={100} />
                            <h4 className="text-amber-500 text-2xl">MyUI</h4>
                        </Link>

                    </div>
                    <div className='px-4 md:px-8'>
                        <SelectBox />
                    </div>
                </div>
                <div className='text-[0.9rem] space-y-6'>
                    <>
                        <div>
                            <Title>Getting Started</Title>
                            <SectionsList items={data.introduction} />
                        </div>
                        <div>
                            <Title>Components</Title>
                            <SectionsList items={data.components} />
                        </div>
                    </>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;