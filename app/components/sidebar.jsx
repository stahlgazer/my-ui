import Image from "next/image";
import SearchBox from "./selectbox";
import Title from "./title";
import SectionsList from "./sections-list";

const Sidebar = () => {
    const data = {
        introduction: [{ name: "Introduction", href: "introduction" }, { name: "Installing and Setting up Rust", href: "javascript:void(0)" }, { name: "Basic Syntax and Data Types", href: "javascript:void(0)" }, { name: "Control Flow Statements", href: "javascript:void(0)" }, { name: "Functions and Modules", href: "javascript:void(0)" }, { name: "Ownership and Borrowing", href: "javascript:void(0)" }, { name: "Structs and Enums", href: "javascript:void(0)" }, { name: "Traits and Generics", href: "javascript:void(0)" }],
        components: [{ name: "Components", href: "javascript:void(0)" }, { name: "Installing and Configuring Cargo", href: "javascript:void(0)" }, { name: "Basic Cargo Commands", href: "javascript:void(0)" }, { name: "Working with Dependencies", href: "javascript:void(0)" }, { name: "Rust Workspaces with Cargo", href: "javascript:void(0)" }, { name: "Ownership and Borrowing", href: "javascript:void(0)" }, { name: "Structs and Enums", href: "javascript:void(0)" }, { name: "Traits and Generics", href: "javascript:void(0)" },]
    }

    return (
        <>
            <nav
                className="fixed z-40 top-0 left-0 w-full h-full border-r bg-black space-y-8 overflow-auto sm:w-80">
                <div className="sticky top-0 space-y-8 bg-white">
                    <div className='h-20 flex items-center px-4 border-b md:px-8'>
                        <a href='javascript:void(0)' className='flex-none'>
                            <Image alt="my-ui logo" src="/favicon.ico" width={100} height={100} className="mx-auto" />

                        </a>
                        <h4 className="text-amber-500 text-2xl">MyUI</h4>
                    </div>
                    <div className='px-4 md:px-8'>
                        <SearchBox placeholder='Search...' />
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