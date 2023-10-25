"use client";
import { MoveDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Dropdown() {
  const items = [
    { name: "Go Back", link: "/card" },
    { name: "Go Forward", link: "/image-card" }
  ];
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        aria-haspopup="listbox"
        aria-expanded={isActiveDropdown}
        onClick={() => {
          setIsActiveDropdown(!isActiveDropdown);
        }}
        className="flex w-[200px] cursor-pointer items-center rounded-md border-2 border-fuchsia-500 bg-black px-7 py-3"
      >
        <div className="mx-auto flex">
          Dropdown
          <MoveDown
            style={{ transform: `rotate(${isActiveDropdown ? "45deg" : "0"})` }}
            className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out"
          />
        </div>
      </button>
      <div
        role="listbox"
        style={{
          top: isActiveDropdown ? "80px" : "50px",
          opacity: isActiveDropdown ? "1" : "0",
          visibility: isActiveDropdown ? "visible" : "hidden",
        }}
        className="absolute left-0 top-[70px] w-[200px] rounded-md text-center transition-all"
      >
        {items.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className="block border-2 border-fuchsia-500 bg-black py-3 m-1 rounded-md hover:bg-fuchsia-500"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
