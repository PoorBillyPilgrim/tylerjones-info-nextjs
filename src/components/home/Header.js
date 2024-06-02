"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [imgSrc, setImgSrc] = useState("/images/sun-32x32.png");
  return (
    <nav className="pt-[15px] w-full px-[10px] sm:px-0">
      <ul className="flex items-center gap-8">
        <li className="mr-auto">
          <Link href="/">
            <strong>Tyler Jones</strong>
          </Link>
        </li>
        <li>
          <Link href="/resume/tyler-jones-resume.pdf">resume</Link>
        </li>
        <li>
          <Link href="#projects">projects</Link>
        </li>
        <li>
          <Link href="#notes">notes</Link>
        </li>
        <li className="h-[20px]">
          <button>
            <Image
              src={imgSrc}
              alt="Emoji of sun"
              width={20}
              height={20}
              className="nav-btn"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
