import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav w-full bg-slate-50 h-16 p-6">
        <div className="container flex justify-between h-full items-center">
          <div className="logo text-black font-bold">
            <h1 className="text-xl">Logo</h1>
          </div>
          <ul className="flex justify-between gap-4">
            <li>
              <Link href="/" className="text-emerald-600 font-medium text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-emerald-600 font-medium text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-emerald-600 font-medium text-lg"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-emerald-600 font-medium text-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
