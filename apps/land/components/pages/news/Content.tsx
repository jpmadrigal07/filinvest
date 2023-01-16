"use client";
import BorderButton from "@/components/button/BorderButton";
import SelectCategory from "@/components/select/SelectCategory";
import Grid from "@/components/svg/Grid";
import List from "@/components/svg/List";
import Image from "next/image";
import React, { useState } from "react";
import moment from "moment";
import Link from "next/link";

const Content = ({ news }: any) => {
  const [position, setPosition] = useState<"list" | "grid">("grid");
  return (
    <section className="my-12 mx-9 gap-9 xl:my-24 xl:mx-16 2xl:mx-44">
      <div className="flex items-center justify-end gap-7">
        <List
          color={position === "list" ? "#0550E3" : "#303030"}
          className="hidden hover:cursor-pointer focus:cursor-pointer md:block"
          onClick={() => setPosition("list")}
        />
        <Grid
          color={position === "grid" ? "#0550E3" : "#303030"}
          className="hidden hover:cursor-pointer focus:cursor-pointer md:block"
          onClick={() => setPosition("grid")}
        />
        <SelectCategory />
      </div>
      {news && news.length > 0 ? (
        <div
          className={`grid ${
            position === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          } mt-12 gap-x-9 gap-y-20`}
        >
          {news.map((item: any) => {
            return (
              <div
                key={item.id}
                className={`flex ${
                  position === "grid"
                    ? "flex-col gap-4"
                    : "flex-row items-center gap-16"
                }`}
              >
                <div className="bg-ghost-white h-[400px]">
                  <Image
                    src={item.coverImage.url}
                    width={position === "grid" ? item.coverImage.width : 600}
                    height={position === "grid" ? item.coverImage.height : 600}
                    alt={item.coverImage.alt}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-jet text-2xl font-bold">{item.title}</h3>
                  <p className="text-dim-gray text-sm">
                    Posted by Admin on {moment(item.createdAt).format("ll")}
                  </p>
                  <p className="text-dim-gray truncate">
                    {item.content[0].children[0].text}
                  </p>
                  <div className="mt-4">
                    <Link href={`/article/${item.slug}`}>
                      <BorderButton
                        buttonText="Read More"
                        textColor="dark-cornflower-blue"
                        borderColor="dark-cornflower-blue"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h3 className="text-silver-chalice text-xl italic">No news found.</h3>
      )}
    </section>
  );
};

export default Content;
