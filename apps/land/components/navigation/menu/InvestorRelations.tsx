"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { INVESTOR_RELATIONS_SUB_ROUTES } from "@/helpers/routes/investorRelations";
// import serializeChildren from "@/helpers/serializeChildren";

type T_InvestorRelationsMenu = {
  title: string;
  subTitle?: string;
  link: string;
};
const InvestorRelations = ({
  investorRelationsMenu,
  news,
}: {
  investorRelationsMenu?: T_InvestorRelationsMenu[];
  news: any;
}) => {
  return (
    <div className="divide-wild-blue-yonder flex divide-x py-8">
      <div className="flex flex-1 flex-col gap-20 pr-12">
        <div className="grid grid-cols-3 gap-x-6 gap-y-16">
          {investorRelationsMenu &&
            investorRelationsMenu.map(
              (routes: T_InvestorRelationsMenu, index: number) => {
                return (
                  <div key={index}>
                    <Link
                      href={routes.link}
                      className="text-white hover:underline"
                    >
                      <h3 className="text-xl text-white">{routes.title}</h3>
                      <h4 className="text-white opacity-50">
                        {routes.subTitle}
                      </h4>
                    </Link>
                  </div>
                );
              }
            )}
        </div>
      </div>
      <div className="w-96 flex-none pl-12">
        <h3 className="text-xl text-white">News</h3>
        <h2 className="mt-4 text-4xl text-white">Featured blog posts</h2>
        <div className="mt-6">
          <Image
            src={`${process.env.CMS_API_URL}${news.value.coverImage.url}`}
            width={350}
            height={news.value.coverImage.height}
            alt="news"
          />
        </div>
        <h3 className="mt-3 text-xl font-bold text-white">
          {news.value.title}
        </h3>
        <h4 className="mt-4 mb-12 text-white opacity-50">
          Lorem ipsum volpar makeri totga ginuis
        </h4>
        {/* <div className="mt-4">
          {serializeChildren(news.value.content)}
        </div> */}
        <Link
          href={`/article/${news.value.slug}`}
          className="text-white hover:underline"
        >{`Read more >`}</Link>
      </div>
    </div>
  );
};

export default InvestorRelations;
