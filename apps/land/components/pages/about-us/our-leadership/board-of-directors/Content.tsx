"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import Tabs from "@/components/header/Tabs";
import MainHeader from "@/components/header/MainHeader";
import BoardOfDirectors from "./BoardOfDirectors";

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
  const tabItems = header?.tabs.map((tab: any) => {
    return {
      title: tab.link.label,
      link: tab.link.url,
    };
  });
  const tabs = <Tabs items={tabItems} />;
  return (
    <>
      <MainHeader
        title={header.title}
        breadcrumbs={breadcrumbs}
        bgUrl={header.coverImage.url}
        bgUrlSmall={header.smallCoverImage.url}
        tabs={tabs}
      />
      <BoardOfDirectors content={content} />
    </>
  );
};

export default Content;
