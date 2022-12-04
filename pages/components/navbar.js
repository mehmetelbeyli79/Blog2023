import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 text-lg capitalize dark:text-gray-300">
        <Link
          href="/"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Anasayfa
        </Link>

        <Link
          href="/Egitimler"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Eğitimler
        </Link>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Yazılar
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Yararlı Siteler
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
