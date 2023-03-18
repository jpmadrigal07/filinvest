"use client";

import React from "react";
import DisclosuresBlock from "./DisclosuresBlock";
import MainHeader from "@/components/header/MainHeader";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";

const Content = ({ content }: any) => {
  const header = content?.content?.find(
    (item: any) => item.blockType === "header"
  );
  const breadcrumbsItems = header?.breadcrumbs.map(
    (tab: any, index: number) => {
      return {
        title: tab.link.label,
        ...(index + 1 < header?.breadcrumbs?.length && {
          link: tab.link.url,
        }),
      };
    }
  );
  const breadcrumbs = <Breadcrumbs items={breadcrumbsItems} />;

  return (
    <>
      <MainHeader
        title={header?.title}
        breadcrumbs={breadcrumbs}
        bgUrl={header?.coverImage.url}
        bgUrlSmall={header?.smallCoverImage.url}
      />
      <DisclosuresBlock content={content} />
      <div className="px-16 py-24">
        <PageNextPrevButton content={content} />
      </div>
    </>
  );
};

export default Content;
