import Image from "next/image";
import SelectBox from "./selectbox";
import Title from "./title";
import SectionsList from "./sections-list";
import Link from "next/link";

const Sidebar = () => {
    const data = {
        introduction: [{ name: "Introduction", href: "introduction" }, { name: "Installing and Setting up Rust", href: "#" }, { name: "Basic Syntax and Data Types", href: "#" }, { name: "Control Flow Statements", href: "#" }, { name: "Functions and Modules", href: "#" }, { name: "Ownership and Borrowing", href: "#" }, { name: "Structs and Enums", href: "#" }, { name: "Traits and Generics", href: "#" }],
        components: [{ name: "Components", href: "#" }, { name: "Installing and Configuring Cargo", href: "#" }, { name: "Basic Cargo Commands", href: "#" }, { name: "Working with Dependencies", href: "#" }, { name: "Rust Workspaces with Cargo", href: "#" }, { name: "Ownership and Borrowing", href: "#" }, { name: "Structs and Enums", href: "#" }, { name: "Traits and Generics", href: "#" },]
    }

    return (
        <>
            <nav
                className="fixed z-40 top-0 left-0 w-full h-full border-r bg-black space-y-8 overflow-auto sm:w-80">
                <div className="sticky top-0 space-y-8 bg-white">
                    <div className='h-20 flex items-center px-4 border-b md:px-8'>
                        <Link href='/' className='flex-none'>
                            <Image alt="my-ui logo" src="/favicon.ico" width={100} height={100} className="mx-auto" />
                        </Link>
                        <h4 className="text-amber-500 text-2xl">MyUI</h4>
                    </div>
                    <div className='px-4 md:px-8'>
                        <SelectBox/>
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