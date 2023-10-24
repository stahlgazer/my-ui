"use client";
import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");
  return (
    <input
      className="rounded-md border-2 text-fuchsia-500 border-fuchsia-500 p-[10px] focus:ring focus:ring-fuchsia-500"
      type="text"
      placeholder={`Talk to me...`}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}
