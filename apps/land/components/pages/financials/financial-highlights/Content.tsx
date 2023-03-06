import Image from "next/image";
import React from "react";
import MainHeader from "@/components/header/MainHeader";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import FinancialHighlightsTable from "./FinancialHighlightsTable";
import FinancialLegend from "./FinancialLegend";
import Statements from "./Statements";
import Tabs from "@/components/header/Tabs";
const Content = ({ content }: any) => {
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
  const tabItems = header?.tabs.map((tab: any) => {
    return {
      title: tab.link.label,
      link: tab.link.url,
    };
  });

  const tabs = <Tabs items={tabItems} />;

  const chartImageBlock = content?.content.find(
    (item: any) => item.blockType === "financial-highlights-chart-image"
  );

  const tableBlockIds = [
    "64058fbc34182e4ac39835b8",
    "6405d001607be64e0c2c72fc",
    "6405ce40607be64e0c2c72db",
    "6405ce63607be64e0c2c72dc",
  ];

  return (
    <div className="sketch-bg">
      <MainHeader
        title={header.title}
        breadcrumbs={breadcrumbs}
        bgUrl={header.coverImage.url}
        bgUrlSmall={header.smallCoverImage.url}
        tabs={tabs}
      />
      <section className="mx-3 mt-16 mb-28 flex flex-col gap-9 px-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        {tableBlockIds?.map((tableId: any, index: number) => (
          <FinancialHighlightsTable
            key={tableId}
            content={content}
            id={tableId}
            withMarginTop={index == 0 ? false : true}
          />
        ))}
        <FinancialLegend content={content} />
        <div className="border-dark-cornflower-blue mt-6 flex w-full justify-center border-y-[1px] py-9">
          <Image
            src={chartImageBlock?.chartImage?.url}
            width={969}
            height={627}
            alt={chartImageBlock?.chartImage?.alt}
          />
        </div>
        <Statements content={content} />
      </section>
    </div>
  );
};

export default Content;
