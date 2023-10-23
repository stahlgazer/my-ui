"use client";
import { useEffect, useRef, useState } from "react";
import { MoveDown } from "lucide-react";
import Link from "next/link";

const Accordion = () => {
  const [showContent, setShowContent] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [showContent]);

  return (
    <div className="w-[300px] rounded-md border-2 border-white m-auto">
      <button
        role="button"
        aria-expanded={showContent}
        style={{ borderBottom: showContent ? "solid 2px" : "0px" }}
        className="flex w-full items-center justify-between rounded-[5px] border-white bg-fuchsia-500 p-5 font-bold"
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
        className="overflow-hidden rounded-[5px] bg-blue-500 font-bold transition-[height] ease-in-out"
      >
        <p className="p-5">BOOM SHAKALAKA!</p>
      </div>
    </div>
  );
};

export default Accordion;
