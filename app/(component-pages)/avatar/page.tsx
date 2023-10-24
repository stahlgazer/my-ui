import avatar from "@/public/avatar.jpg";
import Image from "next/image";
export default function Avatar() {
  return (
    // change Image to img for user to copy paste
    <div>
      <Image
        alt="my-ui logo"
        src={avatar}
        className={`w-[100px] h-[auto] rounded-full border-2 border-fuchsia-500 bg-cover bg-center`}
      />
    </div>
  );
}
