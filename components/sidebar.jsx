import Image from "next/image";
import logo from "@/public/myui.png"
import Title from "./nav-title";
import ComponentList from "./component-list";
import Link from "next/link";

export default function Sidebar() {
    const routes = {
        introduction: [{ name: "Home", href: "/" }, { name: "Introduction", href: "introduction" }, { name: "Usage", href: "usage" }],
        components: [{ name: "Accordion", href: "accordion" }, { name: "Alert", href: "alert" }, { name: "Avatar", href: "avatar" }, { name: "Badge", href: "badge" }, { name: "Button", href: "button" }, { name: "Card", href: "card" }, { name: "Checkbox", href: "checkbox" }, { name: "Dropdown", href: "dropdown" }, { name: "Image", href: "image-card" }, { name: "Input", href: "input" }, { name: "Loading", href: "loading" }, { name: "Modal", href: "modal" }, { name: "Newsletter", href: "newsletter" }, { name: "Radio", href: "radio" }, { name: "Select", href: "select" }, { name: "Popout", href: "popout" }, { name: "Slider", href: "slider" }, { name: "Tabs", href: "tabs" }, { name: "Textarea", href: "textarea" }, { name: "Tooltip", href: "tooltip" },]
    }

    return (
        <>
            <nav
                className="fixed z-40 top-0 left-0 lg:w-80 h-full border-r bg-black space-y-8 overflow-auto">
                <div className="sticky top-0 space-y-8">
                    <div className='h-20 flex items-center px-4 border-b md:px-8 bg-black'>
                        <Link href='/' className="m-auto ">
                            <Image alt="my-ui logo" src={logo} width={100} height={100} />
                        </Link>

                    </div>
                </div>
                <div className='text-[0.9rem] space-y-6'>
                    <>
                        <div>
                            <Title>Documentation</Title>
                            <ComponentList routes={routes.introduction} />
                        </div>
                        <div>
                            <Title>Components</Title>
                            <ComponentList routes={routes.components} />
                        </div>
                    </>
                </div>
            </nav>
        </>
    );
};
