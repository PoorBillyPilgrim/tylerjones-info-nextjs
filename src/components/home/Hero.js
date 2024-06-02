import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

export default function Hero() {
  return (
    <section className="flex flex-col items-center lg:flex-row">
      <Image
        alt="Picture of Tyler Jones playing bass"
        src="/images/playing-bass-color.png"
        height={500}
        width={500}
        className="rounded-full h-auto w-[75%] lg:w-[50%]"
      />

      <div className="text-center lg:text-left lg:pl-4">
        <header>
          <h1 className="text-xl">Hi, I&apos;m Tyler Jones.</h1>
        </header>

        <p className="pb-2">
          I work in libraries, and I enjoy coding. Check out my{" "}
          <Link
            className="text-link-light"
            href="/resume/tyler-jones-resume.pdf"
          >
            resume
          </Link>{" "}
          and some of my{" "}
          <Link className="text-link-light" href="#projects">
            projects
          </Link>
          . Thanks for stopping by. 👍
        </p>

        <SocialMedia inHero />
      </div>
    </section>
  );
}
