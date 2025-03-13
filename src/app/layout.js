// import { ThemeProvider } from "next-themes";
import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { theme } from "../theme";
import { Raleway } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "tylerjones.info",
  description: "Portfolio website for Tyler Jones, a full stack web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${raleway.className}  dark:text-light text-[black] container mx-auto px-8 lg:max-w-[960px] flex flex-col h-screen`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme} defaultMode="dark">
            <CssBaseline />
            <InitColorSchemeScript attribute="class" />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
