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
          <Link
            href={`/projects/${project.slug}`}
            className="opacity-100 transition duration-150 hover:opacity-70"
            key={index}
          >
            <div className="flex flex-1 flex-col gap-4">
              <Image
                src={project.coverImage.url ? project.coverImage.url : ""}
                width={
                  project.coverImage.width ? project.coverImage.width : 507
                }
                height={
                  project.coverImage.height ? project.coverImage.height : 407
                }
                alt={project.coverImage.alt ? project.coverImage.alt : ""}
              />
              <h3 className="text-jet truncate text-2xl font-bold">
                {project.title}
              </h3>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="border-blue-ryb hover:bg-cultured flex items-center gap-3 rounded-full border-[1px] px-6 py-2 transition delay-75"
                >
                  <div className="flex-none">
                    <Tag className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-md text-jet">
                    {project.projectType.title}
                  </p>
                </button>
                <button
                  type="button"
                  className="bg-blue-ryb hover:bg-blue flex items-center gap-3 rounded-full px-6 py-2 transition delay-75"
                >
                  <div className="flex-none">
                    <Flag color="#ffffff" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-white">{project.location.title}</p>
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;
