"use client";
import PageNextPrevButton from "@/components/button/PageNextPrevButtonOld";
import React, { useState } from "react";
import Charters from "./Charters";
import Members from "./Members";

const Content = () => {
  const [currentTab, setCurrentTab] = useState("member");
  return (
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
        {currentTab === "member" ? <Members /> : <Charters />}
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
  );
};

export default Content;
