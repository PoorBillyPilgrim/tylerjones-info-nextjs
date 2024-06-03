import { reverse, map } from "ramda";
import projects from "@/data/projects.json";

import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-lg text-center my-14">_projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {map(
          project => (
            <Project key={project.id} project={project} />
          ),
          reverse(projects)
        )}
      </div>
    </section>
  );
}
