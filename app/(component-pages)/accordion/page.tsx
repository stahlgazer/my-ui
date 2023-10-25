"use client";
import { useState } from "react";
import { MoveDown } from "lucide-react";

export default function Accordion() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="w-[225px] rounded-md border-2 border-fuchsia-500">
      <button
        aria-expanded={showContent}
        className={`flex w-full items-center justify-between rounded-md border-fuchsia-500 bg-black p-3 transition ease-in-out hover:text-fuchsia-500 ${
          showContent ? "border-b-2" : ""
        }`}
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        Accordion
        <MoveDown
          style={{ transform: `rotate(${showContent ? "45deg" : "0"})` }}
          className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out "
        />
      </button>
      <div
        className={`overflow-hidden rounded-md bg-black ${
          showContent ? "h-[100px]" : "h-0"
        } transition-all`}
      >
        <h2 className={`p-4`}>Wow, this is Awesome!</h2>
        <p>Can I just hide in here?</p>
      </div>
    </div>
  );
}
