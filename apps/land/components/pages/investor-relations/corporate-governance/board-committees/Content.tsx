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
      <section className="mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex gap-12">
          <div className="w-1/4 flex-none">
            <div className="divide-gainsboro divide-y bg-white py-4 px-9 shadow-xl">
              <h4
                className={`pb-5 pt-5 text-lg font-bold ${
                  currentTab === "member" && "text-dark-cornflower-blue"
                } hover:cursor-pointer focus:cursor-pointer`}
                onClick={() => setCurrentTab("member")}
              >
                Committees And Members
              </h4>
              <h4
                className={`pt-5 pb-3 text-lg font-bold ${
                  currentTab === "charter" && "text-dark-cornflower-blue"
                } hover:cursor-pointer focus:cursor-pointer`}
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
        <div className="mt-32 flex">
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
