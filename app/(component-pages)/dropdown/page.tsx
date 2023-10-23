"use client";
import { MoveDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Dropdown() {
  const items = [
    { name: "previous component", link: "/card" },
    { name: "next component", link: "/image-card" },
  ];
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  return (
    <div className="relative m-auto">
      <button
        aria-haspopup="listbox"
        aria-expanded={isActiveDropdown}
        onClick={() => {
          setIsActiveDropdown(!isActiveDropdown);
        }}
        className="flex w-[200px] cursor-pointer items-center rounded-md border-2 border-fuchsia-500 bg-black px-7 py-3 font-bold"
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
        className="absolute left-0 top-[70px] w-[200px] rounded-md border-2 border-black text-center "
      >
        {items.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className="block w-full border border-fuchsia-500 bg-black px-7 py-3 first:rounded-t-[5px] last:rounded-b-[5px] hover:bg-fuchsia-500 hover:border-white"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
