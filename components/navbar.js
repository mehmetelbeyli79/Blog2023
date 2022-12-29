import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 text-lg capitalize dark:text-gray-300">
        <Link
          href="/"
          className={router.pathname == "/" ? "link-aktif" : "link-pasif"}
        >
          Anasayfa
        </Link>

        <Link
          href="/Egitimler"
          className={router.pathname == "/Egitimler" ? "link-aktif" : "link-pasif"}
        >
          Eğitimler
        </Link>

        <Link
          href="/Blog"
          className={router.pathname == "/Blog" ? "link-aktif" : "link-pasif"}
        >
          Yazılar
        </Link>

        <Link
          href="/Siteler"
          className={router.pathname == "/Siteler" ? "link-aktif" : "link-pasif"}
        >
          Yararlı Siteler
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
