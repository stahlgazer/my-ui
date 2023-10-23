"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// NavLink component
const NavLink = ({ children, href, className }) => {
    const pathname = usePathname();

    return (
        <Link href={href}
            // Check if it's the home page or a matching route
            className={`${pathname === `/${href}` || (href === '/' && pathname === '/') ? 'border-fuchsia-500 text-fuchsia-500 focus:text-fuchsia-500 bg-gray-100' : ''
                } ${className}`}>
            {children}
        </Link>

    );
};

export default NavLink