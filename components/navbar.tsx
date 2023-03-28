import React from "react";
import Link from "next/link";
import NavbarMobile from "./navbar-mobile";

export default function Navbar(props: any) {
  return (
    <div className="lg:mx-40 md:mx-20 mx-10">
      <div className="hidden md:block">
        <nav className="flex items-center justify-between py-4">
          <Link href="/"><h1 className="text-3xl font-semibold">Oliver Moscow</h1></Link>
          <ul className="flex">
            <li className="mr-6">
              <Link href="/hire">
                <button className="text-xl px-4 py-2 font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 text-orange-500">
                  Hire Me
                </button>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/hire">
                <button className="text-xl px-4 py-2 font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 text-violet-500">
                  Learn To Code
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <NavbarMobile></NavbarMobile>
      <div className="">{props.children}</div>
    </div>
  );
}
