"use client";
import { routes } from "@/data/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let next = ""; // next route
  let previous = ""; // previous route
  const pathname = usePathname();
  for (let i = 0; i < routes.components.length; i++) {
    if (`/${routes.components[i].href}` == pathname) {
      if (i == 0) {
        // start
        next = `/${routes.components[i + 1].href}`;
      } else if (i == routes.components.length - 1) {
        // both prev and next
        previous = `/${routes.components[i - 1].href}`;
        next = "";
      } else if (i > 0 && i < routes.components.length - 1) {
        // reached end
        previous = `/${routes.components[i - 1].href}`;
        next = `/${routes.components[i + 1].href}`;
      }
    }
  }
  return (
    <div className="text-xs md:text-base ml-[160px] md:ml-[190px] lg:ml-[320px] text-center mt-4 md:mt-0 h-screen flex flex-col justify-center items-center">
      <div>{children}</div>
      <div className="flex gap-4 mt-8">
        {previous.length > 1 && (
          <Link href={previous}>
            <button className="transition ease-in-out border-2 bg-black border-fuchsia-500 rounded-md p-2 hover:text-fuchsia-500 hover:ease-linear">
              Prev
            </button>
          </Link>
        )}
        {next.length > 1 && (
          <Link href={next}>
            <button className="transition ease-in-out border-2 bg-black border-fuchsia-500 rounded-md p-2 hover:text-fuchsia-500 hover:ease-linear">
              Next
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
