"use client";
import React from "react";
import Image from "next/image";
import Room from "@/components/svg/Room";
import Baseball from "@/components/svg/Baseball";
import Flag from "@/components/svg/Flag";
import MainHeader from "@/components/header/MainHeader";
import useGetScreen from "../../../../hooks/useGetScreen";
import { Project } from "shared-types";

const Content = ({ project }: { project: Project }) => {
  const { width } = useGetScreen();
  return (
    <>
      <MainHeader
        isBlueHeader
        bgUrl={
          width >= 767 || width == 0
            ? "blue-header-bg-2.png"
            : "northgate-banner-small.png"
        }
        bgUrlSmall="northgate-banner-small.png"
      />
      <section className="-mt-72 mb-16 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-[14rem]">
        <div className="relative flex justify-center">
          <Image
            src={project.coverImage.url ? project.coverImage.url : ""}
            width={1574}
            height={882}
            alt={project.coverImage.alt ? project.coverImage.alt : ""}
            className="z-10 hidden md:block"
          />
          <div className="absolute -bottom-[24rem] z-0 flex max-h-[200px] max-w-[200px] items-center justify-center rounded-full bg-white p-12 shadow-md  md:-bottom-[7rem] md:z-50 md:shadow-none">
            <Image
              src={project.logo.url ? project.logo.url : ""}
              width={190}
              height={169}
              alt={project.logo.alt ? project.logo.alt : ""}
              className="min-h-[90px] min-w-[150px]"
            />
          </div>
        </div>
        <div className="divide-gainsboro mx-6 mt-[27rem] divide-y md:mx-16 md:mt-44">
          <div className="py-9">
            <h2 className="text-jet text-4xl font-bold">{project.title}</h2>
            <p className="text-dim-gray mt-6">{project.description}</p>
          </div>
          <div className="flex flex-col gap-4 py-9">
            <div className="flex items-center gap-6">
              <Room />
              <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                Sustainability Features
              </h3>
            </div>
            <p className="text-jet font-bold">
              {project.sustainabilityFeatureTitle}
            </p>
            <p className="text-dim-gray">
              {project.sustainabilityFeatureDescription}
            </p>
            <ul className="text-dim-gray ml-6 list-[square]">
              {project.sustainabilityFeatureItemLists.map((item) => {
                return (
                  <li className="text-2xl text-[#163E82]">
                    <p className="text-dim-gray text-base">{item.item}</p>
                  </li>
                );
              })}
            </ul>
            {project.sustainabilityFeatureTitleDescription.map((item) => {
              return (
                <>
                  <p className="text-jet mt-4 font-bold">{item.title}</p>
                  <p className="text-dim-gray">{item.description}</p>
                </>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 py-9">
            <div className="flex items-center gap-6">
              <Baseball />
              <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                Amenities
              </h3>
            </div>
            {project.amenitiesTitleDescription.map((item) => {
              return (
                <>
                  <p className="text-jet mt-4 font-bold">{item.title}</p>
                  {item.description && (
                    <p className="text-dim-gray">{item.description}</p>
                  )}
                </>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 py-9">
            <div className="flex items-center gap-6">
              <Flag />
              <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                Location
              </h3>
            </div>
            <p className="text-dim-gray">{project.locationDescription}</p>
            <ul className="text-dim-gray ml-6 flex list-[square] flex-col gap-4">
              {project.locationItemLists.map((item) => {
                return (
                  <li className="text-2xl text-[#163E82]">
                    <p className="text-dim-gray text-base">{item.item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
