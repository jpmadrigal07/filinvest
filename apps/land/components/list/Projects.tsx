import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "shared-types";
import Flag from "../svg/Flag";
import Tag from "../svg/Tag";

type T_Projects = {
  className?: string;
  projects: Project[];
  isLoading?: boolean;
};

const Projects = ({ className, projects, isLoading = false }: T_Projects) => {
  if (isLoading) return <div className="mt-12">...</div>;
  if (projects.length === 0) return <div className="mt-12">No result</div>;
  return (
    <div
      className={`mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {projects.map((project, index) => {
        return (
          <div className="group flex flex-1 flex-col gap-4" key={index}>
            <Link
              href={`/projects/${project.slug}`}
              className="flex flex-1 flex-col gap-4"
            >
              <Image
                src={project.coverImage.url ? project.coverImage.url : ""}
                width={
                  project.coverImage.width ? project.coverImage.width : 507
                }
                height={
                  project.coverImage.height ? project.coverImage.height : 407
                }
                alt={project.coverImage.alt ? project.coverImage.alt : ""}
                className="h-[350px] w-[507px] object-cover object-center opacity-100 transition duration-150 group-hover:opacity-70"
              />
              <h3 className="text-jet truncate text-2xl font-bold">
                {project.title}
              </h3>
            </Link>
            <div className="flex gap-4">
              <Link
                href={`/property-search?projectType=${project.projectType.title}`}
                className="border-blue-ryb hover:bg-cultured flex items-center gap-3 rounded-full border-[1px] px-6 py-2 transition delay-75"
              >
                <Tag className="h-5 w-5 flex-none text-green-500" />
                <p className="text-jet text-sm">{project.projectType.title}</p>
              </Link>
              <Link
                href={`/property-search?location=${project.location.title}`}
                className="bg-blue-ryb hover:bg-blue flex items-center gap-3 rounded-full px-6 py-2 transition delay-75"
              >
                <Flag color="#ffffff" classes="flex-none w-5 h-5" />
                <p className="text-sm text-white">{project.location.title}</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
