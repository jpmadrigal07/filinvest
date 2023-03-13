import Link from "next/link";
import React from "react";
import { Project } from "shared-types";
import ProjectCard from "./ProjectCard";

type T_TileProjects = {
  className?: string;
  projects: Project[];
};

const TileProjects = ({ projects }: T_TileProjects) => {
  if (projects.length === 0) return <></>;

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-16 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => {
        return (
          <Link
            className="group relative flex shadow-[0_3px_60px_rgba(0,0,0,0.10)]"
            key={index}
            href={`/projects/${project.slug}`}
          >
            <ProjectCard key={project.id} project={project} />
          </Link>
        );
      })}
    </div>
  );
};

export default TileProjects;
