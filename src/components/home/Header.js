"use client";
import { useEffect, useState } from "react";
import { useColorScheme } from "@mui/material/styles";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { mode, setMode } = useColorScheme();
  // const { theme, setTheme } = useTheme();
  const [imgSrc, setImgSrc] = useState("/images/sun-32x32.png");

  useEffect(() => {
    const imgSrc =
      mode === "dark" ? "/images/sun-32x32.png" : "/images/moon-32x32.png";
    setImgSrc(imgSrc);
  }, [mode]);

  const onClick = mode => setMode(mode === "dark" ? "light" : "dark");
  if (!mode) {
    return null;
  }

  return (
    <nav className="pt-6 pb-20 w-full">
      <ul className="flex items-center gap-6">
        <li className="mr-auto">
          <Link href="/">
            <strong>Tyler Jones</strong>
          </Link>
        </li>
        <li>
          <Link href="/resume/tyler-jones-resume.pdf">resume</Link>
        </li>
        <li>
          <Link href="/#projects">projects</Link>
        </li>
        <li className="h-[20px]">
          <button onClick={() => onClick(mode)}>
            <Image
              src={imgSrc}
              alt="Emoji representing toggle for dark and light theme"
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
