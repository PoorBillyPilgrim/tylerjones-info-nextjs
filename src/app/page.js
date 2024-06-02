import { Fragment } from "react";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Notes from "@/components/home/Notes";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <Fragment>
      <Header />

      <main className="flex flex-col items-center justify-between">
        <Hero />
        <hr className="mt-12 border-t-1 border-[#E1E1E1] w-full" />

        <Projects />
        <Notes />
      </main>

      <Footer />
    </Fragment>
  );
}
