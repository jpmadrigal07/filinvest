"use client";
import PageNextPrevButton from "@/components/button/PageNextPrevButtonOld";
import React, { useState } from "react";
import Charters from "./Charters";
import Members from "./Members";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import Tabs from "@/components/header/Tabs";
import MainHeader from "@/components/header/MainHeader";

const Content = ({ content }: any) => {
  const [currentTab, setCurrentTab] = useState("member");
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
      <section className="mx-6 mb-16 flex flex-col gap-5 lg:mx-9 lg:mt-16 lg:mb-28 lg:gap-9 xl:mx-16 2xl:mx-44">
        <div className="gap-12 lg:flex">
          <div className="mb-5 lg:mb-0 lg:w-1/4 lg:flex-none">
            <div className="divide-gainsboro flex flex-row bg-white lg:flex-col lg:divide-y lg:py-4 lg:px-9 lg:shadow-xl">
              <h4
                className={`pb-5 pt-5 text-lg font-bold ${
                  currentTab === "member" && "text-dark-cornflower-blue"
                } hover:cursor-pointer hover:border-b-2 focus:cursor-pointer focus:border-b`}
                onClick={() => setCurrentTab("member")}
              >
                Committees And Members
              </h4>
              <h4
                className={`pt-5 pb-3 text-lg font-bold ${
                  currentTab === "charter" && "text-dark-cornflower-blue"
                } hover:cursor-pointer hover:border-b-2 focus:cursor-pointer focus:border-b`}
                onClick={() => setCurrentTab("charter")}
              >
                Board Committee Charters
              </h4>
            </div>
          </div>
          {currentTab === "member" ? (
            <Members content={content} />
          ) : (
            <Charters content={content} />
          )}
        </div>
        <div className="mt-20 flex flex-col sm:flex-row lg:mt-32 ">
          <div className="flex-none">
            <PageNextPrevButton
              imgName="investor-relations-program-next-prev.png"
              pageName="Structures"
              isLeft={true}
            />
          </div>
          <div className="grow"></div>
          <div className="flex-none">
            <PageNextPrevButton
              imgName="investor-relations-program-next-prev.png"
              pageName="Investor Relations Program"
              isLeft={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
