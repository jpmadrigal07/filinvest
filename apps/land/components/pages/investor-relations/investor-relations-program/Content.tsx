import React from "react";
import MainHeader from "@/components/header/MainHeader";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import InvestorRelationsProgramBlock from "./InvestorRelationsProgramBlock";

const Content = ({ content }: any) => {
  console.log(content);
  const header = content?.content.find(
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
        title={header.title}
        breadcrumbs={breadcrumbs}
        bgUrl={header.coverImage.url}
        bgUrlSmall={header.smallCoverImage.url}
      />
      <InvestorRelationsProgramBlock content={content} />
    </>
  );
};

export default Content;
