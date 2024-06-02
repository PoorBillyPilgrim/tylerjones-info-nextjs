import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <ul class="pt-15">
        <li class="li-l">
          <Link href="/">
            <strong>Tyler Jones</strong>
          </Link>
        </li>
        <li class="li-mid">
          <Link href="/tyler-jones-resume.pdf">resume</Link>
        </li>
        <li class="li-mid">
          <Link href="#projects">projects</Link>
        </li>
        <li class="li-mid">
          <Link href="#notes">notes</Link>
        </li>
        <li>
          <button class="toggle-dark-mode dark-mode-btn">
            <Image
              src="/sun-32x32.png"
              width={20}
              height={20}
              class="nav-btn"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
