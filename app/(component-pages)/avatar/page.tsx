import avatar from "@/app/avatar.jpg";
import Image from "next/image";
export default function Avatar() {
  return (
    <div>
      <Image
        alt="my-ui logo"
        src={avatar}
        width={100}
        height={100}
        className={`rounded-full border-2 border-white bg-cover bg-center transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] m-auto`}
      />
    </div>
  );
}
