"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// NavLink component
const NavLink = ({ children, href, className }) => {
    const pathname = usePathname();
    pathname == `/${href}` ? console.log(pathname, "path") : null;
    pathname == `/${href}` ? console.log(href, "href") : null;
    
    return (
        <Link href={href} className={pathname == `/${href}` ? `border-orange-500 text-gray-400 ${className}` : `${className}`}>
            {children}
        </Link>
    );
};

export default NavLink