"use client";
import React from "react";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import MainHeader from "@/components/header/MainHeader";
import OfficeParks from "./OfficeParks";

const Content = ({ content }: any) => {
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
      <section className="mx-9 mb-32 -mt-12 md:-mt-12 lg:-mt-32 xl:mx-16 2xl:mx-44 2xl:-mt-40">
        <OfficeParks content={content} />
      </section>
    </>
  );
};

export default Content;
