import Link from "next/link";
import { useState } from "react";

export default function NavbarMobile(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <div className="max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-3xl font-bold">Oliver Moscow</h1>
            </Link>
          </div>
          <div className="-mr-2 flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover: hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="pt-2 pb-3 space-y-1">
          <Link legacyBehavior href="/hire">
          <a className="block px-3 py-2 text-2xl rounded-md text-base font-medium  focus:outline-none focus: focus:bg-gray-700 text-orange-500">
            Hire Me
          </a>
        </Link>
        {/* <Link legacyBehavior href="/lessons">
          <a className="block px-3 py-2 text-2xl rounded-md text-base font-medium  focus:outline-none focus: focus:bg-gray-700 text-violet-500">
            Learn To Code
          </a>
        </Link> */}
      </div>
      ) : (
        <div>{props.children}</div>
      )}
    </nav>
  );
}
