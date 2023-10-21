"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
// NavLink component
const NavLink = ({ ...props }) => {
    const {
        children,
        href = "",
        className = "",
        active = "",
    } = props;

    const [pathname, setPathname] = useState("/");

    const isActive = pathname == href;
    const activeClass = isActive ? active : "";

    useEffect(() => {
        setPathname(window.location.pathname);
    }, [props]);

    return (
        <Link href={href} {...props} className={`${activeClass} ${className}`}>
            {children}
        </Link>
    );
};

export default NavLink