"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { INVESTOR_RELATIONS_SUB_ROUTES } from "@/helpers/routes/investorRelations";

const InvestorRelations = () => {
  return (
    <div className="divide-wild-blue-yonder flex divide-x py-8">
      <div className="flex flex-1 flex-col gap-20 pr-12">
        <div className="grid grid-cols-3 gap-x-6 gap-y-16">
          {INVESTOR_RELATIONS_SUB_ROUTES.map((routes, index) => {
            return (
              <div key={index}>
                <Link href={routes.url} className="text-white hover:underline">
                  <h3 className="text-xl text-white">{routes.name}</h3>
                  <h4 className="text-white opacity-50">
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                  </h4>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-none pl-12">
        <h3 className="text-xl text-white">News</h3>
        <h2 className="mt-4 text-4xl text-white">Featured blog posts</h2>
        <div className="mt-6">
          <Image
            src="/news-investor-relations.png"
            width={276}
            height={198}
            alt="Picture of the author"
          />
        </div>
        <h3 className="mt-3 text-xl font-bold text-white">
          Filinvest Activa recognized
          <br />
          as the Best Mixed-use
          <br />
          Development
        </h3>
        <h4 className="mt-4 mb-12 text-white opacity-50">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Suspendisse varius enim in eros.
        </h4>
        <Link
          href="/news"
          className="text-white hover:underline"
        >{`Read more >`}</Link>
      </div>
    </div>
  );
};

export default InvestorRelations;
