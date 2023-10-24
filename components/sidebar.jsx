import Image from "next/image";
import logo from "@/public/myui.png"
import Title from "./nav-title";
import ComponentList from "./component-list";
import Link from "next/link";
import { routes } from "@/data/routes";

export default function Sidebar() {
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
