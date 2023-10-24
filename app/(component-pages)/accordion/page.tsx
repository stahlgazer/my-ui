"use client";
import { useEffect, useRef, useState } from "react";
import { MoveDown } from "lucide-react";

export default function Accordion() {
  const [showContent, setShowContent] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [showContent]);

  return (
    <div className="w-[225px] rounded-md border-2 border-fuchsia-500">
      <button
        role="button"
        aria-expanded={showContent}
        style={{ borderBottom: showContent ? "solid 2px" : "0px" }}
        className="flex w-full items-center justify-between rounded-md border-fuchsia-500 bg-black p-3 font-bold transition ease-in-out hover:text-fuchsia-500"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        Accordion
        <MoveDown
          style={{ transform: `rotate(${showContent ? "45deg" : "0"})` }}
          className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out"
        />
      </button>
      <div
        ref={contentRef}
        style={{ height: showContent ? `${contentHeight}` : "0" }}
        className="overflow-hidden rounded-md bg-black font-bold transition-[height] ease-in-out"
      >
        <p className="p-3 text-xs">HERE I AM</p>
      </div>
    </div>
  );
}
