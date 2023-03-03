import React from "react";
import MainHeader from "@/components/header/MainHeader";
import Image from "next/image";
import RulerPencil from "@/components/svg/RulerPencil";
import MapPinOutline from "@/components/svg/MapPinOutline";
import HomeOutline from "@/components/svg/HomeOutline";
import BorderButton from "@/components/button/BorderButton";
import serializeChildren from "@/helpers/serializeChildren";
import { Project } from "shared-types";
import CONTACT_US_ROUTES from "@/helpers/routes/contactUs";
import Link from "next/link";

const Content = ({ project }: { project: Project }) => {
  return (
    <div>
      <MainHeader
        title={project.title}
        otherUrl={`${process.env.CMS_URL}${encodeURI(
          // @ts-expect-error
          project.headerImage.url
        )}`}
      />
      <div className="bg-alice-blue flex items-center gap-3 px-9 py-4 2xl:px-16">
        <p className="text-dim-gray">Projects</p>
        <p className="text-dim-gray">/</p>
        <p className="text-dim-gray">{project.title}</p>
      </div>
      <div className="bg-cultured flex flex-col items-center justify-center gap-12 px-9 py-6 lg:flex-row lg:gap-0 2xl:px-16">
        <div className="flex-1">
          <Image
            src={project.logo.url ? project.logo.url : ""}
            width={project.logo.width}
            height={project.logo.height}
            alt={project.logo.alt}
          />
        </div>
        <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-center">
          <div className="flex gap-4">
            <div className="bg-royal-dark-blue rounded-full p-3">
              <HomeOutline color="#ffffff" className="h-8 w-8" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-jet text-lg">PROJECT TYPE</p>
              <p className="text-dark-cornflower-blue text-lg font-bold">
                {project.projectType.title}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-royal-dark-blue rounded-full p-3">
              <MapPinOutline color="#ffffff" className="h-8 w-8" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-jet text-lg">LOCATION</p>
              <p className="text-dark-cornflower-blue text-lg font-bold">
                {project.location.title}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-royal-dark-blue rounded-full p-4">
              <RulerPencil color="#ffffff" className="h-7 w-7" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-jet text-lg">SIZE</p>
              <p className="text-dark-cornflower-blue text-lg font-bold">
                {new Intl.NumberFormat("en-US").format(Number(project.size))}{" "}
                sqm
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-9 py-16 md:flex-row 2xl:px-16">
        <div className="flex-1">
          <Image
            src={project.coverImage.url ? project.coverImage.url : ""}
            width={project.coverImage.width}
            height={project.coverImage.height}
            alt={project.coverImage.alt}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-dark-cornflower-blue text-4xl font-bold">
            Overview
          </h2>
          <div className="mt-9">{serializeChildren(project.overview)}</div>
          <div className="border-gainsboro mt-9 flex border-b-[1px]">
            <h3 className="border-dark-cornflower-blue text-dark-cornflower-blue border-b-2 py-2 text-xl font-bold">
              Location
            </h3>
          </div>
          <div className="mt-9">{serializeChildren(project.locationTab)}</div>
        </div>
      </div>
      <Image
        src={project.mapImage.url ? project.mapImage.url : ""}
        width={project.mapImage.width}
        height={project.mapImage.height}
        alt={project.mapImage.alt}
        className="mt-16"
      />
      <div className="flex flex-col items-center gap-12 bg-[url('/projects-bottom-bg.png')] px-16 py-12 lg:flex-row lg:gap-0 lg:px-28 2xl:px-44">
        <div className="flex-1">
          <h3 className="text-center text-3xl text-white lg:text-left">
            Looking To Buy A New Property?
          </h3>
          <p className="mt-2 text-center text-white lg:text-left">{`Have any questions? We'd love to hear from you.`}</p>
        </div>
        <div>
          <Link href={CONTACT_US_ROUTES.url}>
            <BorderButton buttonText="Contact Us" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
