import React from "react";
import Link from "next/link";
import NavbarMobile from "./navbar-mobile";

export default function Navbar(props: any) {
  return (
    <div id="navbar" className="lg:mx-40 md:mx-20 mx-10">
      <div className="hidden md:block">
        <nav className="flex items-center justify-between py-4">
          <Link href="/">
            <h1 className="text-3xl font-bold">OLIVER MOSCOW</h1>
          </Link>
          <ul className="flex text-md font-bold">
            <li className="mr-6">
              <Link href="/about">
              ABOUT ME
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/portfolio">
              MY WORK
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/contact" className="text-blue-400">
              LETS CHAT!
              </Link>
            </li>

            {/* <li className="mr-6">
              <Link href="/lessons">
                <button className="text-xl px-4 py-2 font-bold rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 text-violet-500">
                  Learn To Code
                </button>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <NavbarMobile></NavbarMobile>
    </div>
  );
}
