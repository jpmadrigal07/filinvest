import React from "react";

import Stocks from "./Stocks";
import MainHeader from "@/components/header/MainHeader";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import Tabs from "@/components/header/Tabs";
import OutstandingSharesTable from "./OutstandingSharesTable";
import StockHolderTable from "./StockHolderTable";
import Image from "next/image";
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

  const title = content?.content.find(
    (item: any) => item.blockType === "stock-information-title"
  )?.title;

  return (
    <div className="sketch-bg-stock">
      <MainHeader
        title={header.title}
        breadcrumbs={breadcrumbs}
        bgUrl={header.coverImage.url}
        bgUrlSmall={header.smallCoverImage.url}
        tabs={tabs}
      />
      <section className="mx-3 mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div>
          <h2 className="text-jet text-center text-3xl font-bold">{title}</h2>
        </div>
        <Stocks />
        <OutstandingSharesTable content={content} />
        <StockHolderTable content={content} />
        <div className="relative w-full">
          <Image
            priority
            className={`absolute -left-[105px] -bottom-[28rem] z-[-1] 2xl:-bottom-10`}
            src={`/sketch-house.png`}
            alt={`sketch-house.png`}
            width={1508}
            height={400}
          />
        </div>
      </section>
    </div>
  );
};

export default Content;
