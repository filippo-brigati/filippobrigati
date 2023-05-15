"use client";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";

const myFont = localFont({
  src: "../public/fonts/InterDisplay-Bold.woff2",
  display: "swap",
});

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full">
        <p className={myFont.className + " text-2xl"}>
          {pathname.substring(1, pathname.length).charAt(0).toUpperCase() + pathname.substring(2, pathname.length) || "About"}
        </p>
      </div>
      <div className="w-full flex flex-row justify-end items-center gap-x-5 my-7">
        <Link
            className={"" + pathname === "/posts" ? "text-gray-500" : "text-slate-800 hover:text-slate-700 dark:text-white dark:hover:text-gray-200 underline underline-offset-2"}
            href={"/posts"}
            key={"/posts"}
            >
          Thoughts
        </Link>
        <Link
            className={"" + pathname === "/projects" ? "text-gray-500" : "text-slate-800 hover:text-slate-700 dark:text-white dark:hover:text-gray-200 underline underline-offset-2"}
            href={"/projects"}
            key={"/projects"}
            >
          Projects
        </Link>
        <Link
          className={"" + pathname === "/" ? "text-gray-500" : "text-slate-800 hover:text-slate-700 dark:text-white dark:hover:text-gray-200 underline underline-offset-2"}
          href={"/"}
          key={"/"}
        >
          About
        </Link>
      </div>
    </>
  );
}
