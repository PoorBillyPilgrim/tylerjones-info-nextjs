import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialMedia({ inHero = false }) {
  return (
    <div
      className={`flex justify-center gap-2 ${
        inHero ? "lg:justify-start" : ""
      }`}
    >
      <Link href="mailto:tjjones93@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faSquareEnvelope} className="text-[30px]" />
      </Link>

      <Link href="https://github.com/PoorBillyPilgrim" target="_blank">
        <FontAwesomeIcon icon={faSquareGithub} className="text-[30px]" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/tyler-jones-2a0a84143/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-[30px]" />
      </Link>
    </div>
  );
}
