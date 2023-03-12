import Link from "next/link";
import React from "react";
import { Project } from "shared-types";
import ProjectCard from "./ProjectCard";

type T_TileProjects = {
  className?: string;
  projects: Project[];
};

const TileProjects = ({ className, projects }: T_TileProjects) => {
  if (projects.length === 0) return <></>;
  return (
    <div
      className={`mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {projects.map((project, index) => {
        // const formatter = Intl.NumberFormat("en", { notation: "compact" });
        // const _lowercaseBrand =
        //   project.site.title !== "Land"
        //     ? project.site.title.toLocaleLowerCase()
        //     : null;
        return (
          <Link className="flex" key={index} href={`/projects/${project.slug}`}>
            <ProjectCard key={project.id} project={project} />
          </Link>
        );
      })}
    </div>
  );
};

export default TileProjects;
