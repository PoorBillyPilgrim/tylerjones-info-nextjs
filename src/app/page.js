import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between flex-[1_0_auto]">
      <Hero />
      <hr className="mt-12 border-t-1 border-[#E1E1E1] w-full" />
      <Projects />
    </main>
  );
}
