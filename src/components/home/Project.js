import { join } from "ramda";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { notBlank } from "@/util/general";

export default function Project({ project }) {
  return (
    <article className="flex flex-col mb-12 rounded shadow-[0_5px_10px_rgba(34,38,42,0.5)] dark:text-light text-[black]">
      <div className="sm:h-[300px] md:h-[360px] lg:h-[300px]">
        <Link href={project.url} target="_blank">
          <Image
            alt="Thumbnail image"
            src={project.imgSrc}
            height={200}
            width={200}
            className="w-full h-auto"
          />
        </Link>
      </div>

      <div className="flex flex-col p-3 grow">
        <Link href={project.url} target="_blank">
          <h3 className="text-md">{project.title}</h3>
        </Link>

        <p className="mb-12">{project.date}</p>
        <p className="mb-10">{project.description}</p>
        <p className="mb-10">
          <em>{join(", ", project.keywords)}</em>
        </p>

        {notBlank(project.repo) && (
          <Link href={project.repo} target="_blank" className="mt-auto">
            <FontAwesomeIcon icon={faSquareGithub} className="text-[30px]" />
          </Link>
        )}
      </div>
    </article>
  );
}
