import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [index, setIndex] = useState([0, 1]);

  const className = [
    "border-indigo-500 text-gray-800 dark:text-white whitespace-nowrap pb-2 px-1 border-b-2 font-normal text-base",
    "border-transparent text-gray-500 dark:text-gray-200 hover:text-gray-700 hover:dark:text-white hover:border-gray-300 whitespace-nowrap pb-2 px-1 border-b-2 font-normal text-base",
  ];

  return (
    <>
      <div className="my-9">
        <div className="sm:flex sm:items-baseline">
          <nav className="-mb-px flex space-x-8">
            <Link href="/" passHref>
              <button
                className={className[index[0]]}
                onClick={() => setIndex([0, 1])}
              >
                {" "}
                Home{" "}
              </button>
            </Link>
            <Link href="/post" passHref>
              <button
                className={className[index[1]]}
                onClick={() => setIndex([1, 0])}
              >
                {" "}
                Writings{" "}
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
