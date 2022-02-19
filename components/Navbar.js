import Link from "next/link";

const Navbar = () => {
  return (
    <div className="row max-w-5xl m-auto py-6 px-8 sm:py-8">
      <div className="grid grid-cols-2">
        <div className="col-span-2 flex justify-end gap-6">
          <Link href="/project"><a className="">About me</a></Link>
          <Link href="/project"><a className="">Project</a></Link>
          <Link href="/project"><a className="">Contact</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
