import Link from "next/link";

export default function errorPage() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-regular text-sm text-gray-500 dark:text-slate-300">
          <span className="text-red-600 dark:text-red-400">404</span> - Page Not Found
        </h1>
        <h2 className="font-regular text-sm text-gray-500 dark:text-slate-300">
            go back to home by clicking{" "}
          <Link href="/">
          <a className="text-black dark:text-white">
            here
          </a>
          </Link>
        </h2>
      </div>
    </>
  );
}
