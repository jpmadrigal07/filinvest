"use client";
import Image from "next/image";
import React, { useState } from "react";
import SelectLocation from "@/components/select/SelectLocation";
import Projects from "@/components/list/Projects";
import { LocationCategory, Project } from "shared-types";
import useGetProjectsByLocation from "@/components/list/hooks/useGetProjectsByLocation";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import MainHeader from "@/components/header/MainHeader";
import OfficeParks from "./OfficeParks";
import ProjectsContent from "./Projects";

const Content = ({ content, projects, locations }: any) => {
  const header = content?.content.find(
    (item: any) => item.blockType === "header"
  );
  const breadcrumbsItems = header?.breadcrumbs.map(
    (tab: any, index: number) => {
      return {
        title: tab.link.label,
        ...(index + 1 < header?.breadcrumbs?.length && { link: tab.link.url }),
      };
    }
  );
  const breadcrumbs = <Breadcrumbs items={breadcrumbsItems} />;
  return (
    <>
      <MainHeader
        title={header.title}
        breadcrumbs={breadcrumbs}
        bgUrl={header.coverImage.url}
        bgUrlSmall={header.smallCoverImage.url}
      />
      <section className="mx-9 mt-16 mb-32 xl:mx-16 2xl:mx-44">
        <OfficeParks content={content} />
        <ProjectsContent projects={projects} locations={locations} />
      </section>
    </>
  );
};

export default Content;
