import Image from "next/image";
import Link from "next/link";
import React from "react";
import Flag from "../svg/Flag";
import Tag from "../svg/Tag";

type T_Project = {
  imgSrc: string;
  width?: number;
  height?: number;
  alt?: string;
  title: string;
  slug: string;
  location: string;
  type: string;
};

type T_Projects = {
  className?: string;
  projects: T_Project[];
};

const Projects = ({ className, projects }: T_Projects) => {
  if (projects.length === 0) return <></>;
  return (
    <div
      className={`mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {projects.map((project) => {
        return (
          <Link
            href={`/${project.slug}`}
            className="opacity-100 transition duration-150 hover:opacity-70"
          >
            <div className="flex flex-1 flex-col gap-4">
              <Image
                src={project.imgSrc}
                width={project.width ? project.width : 507}
                height={project.height ? project.height : 407}
                alt={project.alt ? project.alt : ""}
              />
              <h3 className="text-jet text-2xl font-bold">{project.title}</h3>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
                >
                  <div className="flex-none">
                    <Tag color="#303030" className="h-5 w-5" />
                  </div>
                  <p className="text-md text-jet">{project.type}</p>
                </button>
                <button
                  type="button"
                  className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#ffffff" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-white">{project.location}</p>
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
