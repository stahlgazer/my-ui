import Image from "next/image";
import girl from "@/public/girl.jpg";

export default function ImageCard() {
  return (
    <div className="border-2 border-fuchsia-500 rounded-md shadow-2xl shadow-fuchsia-500">
      <Image
        className="w-[150px] md:w-[250px] lg:w-[350px] h-auto border-b-2 border-fuchsia-500"
        src={girl}
        alt="image"
      />
      <h4 className="p-2 underline decoration-fuchsia-500">Natalia</h4>
      <p className="text-xs p-2">She seems nice...</p>
    </div>
  );
}
