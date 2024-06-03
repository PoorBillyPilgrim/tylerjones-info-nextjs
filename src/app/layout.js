import { ThemeProvider } from "next-themes";
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
        className={`${raleway.className} dark:bg-dark dark:text-light bg-light text-[black] container mx-auto px-8 lg:max-w-[960px] flex flex-col h-screen`}
      >
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
