"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

type LinkData = {
  label: string;
  href: string;
};

const Sideitem = (props: LinkData) => {
  let pathname = usePathname();
  if (pathname?.includes('/posts/')) {
    pathname = '/posts';
  }

  return (
    <div className="rounded-lg p-1">
      <Link href={props.href}>
        <p className={`text-sm ${pathname?.slice(1) === props.href ? `text-black dark:text-white font-bold hover:text-black dark:hover:text-white` : `text-neutral-700 dark:text-neutral-50 hover:text-black dark:hover:text-white`}`}>
          {props.label}
        </p>
      </Link>
    </div>
  );
};

const Sidebar = () => {
  const arr: LinkData[] = [
    { label: "Home", href: "" },
    { label: "About", href: "about" },
    { label: "Project", href: "project" },
    { label: "Blog", href: "posts" },
  ];

  return (
    <>
      <div className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0">
        <div className="lg:sticky lg:top-20">
          <div className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
            {arr.map((a: LinkData) => (
              <Sideitem key={a.href} {...a} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
