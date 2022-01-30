import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container flex flex-wrap justify-between items-center mx-auto md:max-w-5xl">
      <p>filippobrigati</p>
      <div>
        <ul className="flex flex-row space-x-8">
          <li>home</li>
          <li>blog</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
