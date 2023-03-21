"use client";
import React from "react";
import TitleText from "./TitleText";
import ProjectsContent from "./Projects";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import MainHeader from "@/components/header/MainHeader";

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
      <section className="mx-9 mt-9 lg:mx-auto lg:max-w-[1024px] xl:max-w-[1200px]">
        <TitleText content={content} />
        <ProjectsContent projects={projects} locations={locations} />
      </section>
    </>
  );
};

export default Content;
