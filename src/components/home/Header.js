"use client";
import React, { useEffect, useState } from "react";
import { useColorScheme } from "@mui/material/styles";

import Image from "next/image";
import Link from "next/link";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function Header() {
  const { mode, setMode } = useColorScheme();
  const [imgSrc, setImgSrc] = useState("/images/sun-32x32.png");

  useEffect(() => {
    const imgSrc =
      mode === "dark" ? "/images/sun-32x32.png" : "/images/moon-32x32.png";
    setImgSrc(imgSrc);
  }, [mode]);

  const onClick = mode => setMode(mode === "dark" ? "light" : "dark");

  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        pt: "1.5rem",
        pb: "5rem",
      }}
    >
      <Stack
        component="ul"
        direction="row"
        spacing={2}
        sx={{
          alignItems: "center",
        }}
      >
        <li className="mr-auto">
          <Link href="/">
            <strong>Tyler Jones</strong>
          </Link>
        </li>
        <li>
          <Link href="/resume/resume.pdf">resume</Link>
        </li>
        <li>
          <Link href="/#projects">projects</Link>
        </li>
        {mode && (
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
        )}
      </Stack>
    </Box>
  );
}
