"use client";
import { useState } from "react";
import Button from "../button/button";

export default function Newsletter() {
  const [value, setValue] = useState("");

  const submitEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitEmail}>
      <input
        className="rounded-md border-2 text-fuchsia-500 border-fuchsia-500 p-[10px] focus:ring focus:ring-fuchsia-500"
        required
        type="email"
        placeholder={`Email`}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button>Enter</Button>
    </form>
  );
}
