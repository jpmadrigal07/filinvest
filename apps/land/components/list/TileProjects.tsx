import { getBrandHexColor } from "@/helpers/getBrandHexColor";
import { T_Brands } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "shared-types";
import Flag from "../svg/Flag";
import Peso from "../svg/Peso";
import SizeBox from "../svg/SizeBox";

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
        const formatter = Intl.NumberFormat("en", { notation: "compact" });
        const formattedPrice = formatter.format(project.price);
        const lowercaseBrand =
          project.site.title !== "Land"
            ? project.site.title.toLocaleLowerCase()
            : null;
        return (
          <Link
            key={index}
            href={`/projects/${project.slug}`}
            className="opacity-100 transition duration-150 hover:opacity-70"
          >
            <div className="bg-white shadow-xl">
              <div className="relative">
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
                {lowercaseBrand && (
                  <Image
                    src={`/${lowercaseBrand}-property.png`}
                    width={222}
                    height={222}
                    alt={`${project.site.title} Tag`}
                    className="absolute -right-12 -bottom-28"
                  />
                )}
              </div>
              <div className="divide-gainsboro divide-y p-6">
                <div className="pb-4">
                  <h2 className="text-jet text-2xl font-bold">
                    {project.title}
                  </h2>
                  <p className="text-jet">
                    Excepteur sint occaecat cupidatat non proident
                  </p>
                </div>
                <div className="flex gap-2 pt-4 2xl:gap-6">
                  <div className="flex items-center justify-center gap-3">
                    <Peso
                      color={getBrandHexColor(project.site.title as T_Brands)}
                      classes="h-5 w-5"
                    />
                    <p className="font-bold">{formattedPrice}</p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Flag
                      color={getBrandHexColor(project.site.title as T_Brands)}
                      classes="h-5 w-5"
                    />
                    <p className="font-bold">{project.location.title}</p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <SizeBox
                      color={getBrandHexColor(project.site.title as T_Brands)}
                      classes="h-6 w-6"
                    />
                    <p className="font-bold">{project.size}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default TileProjects;
