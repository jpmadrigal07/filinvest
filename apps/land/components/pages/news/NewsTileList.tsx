"use client";
import BorderButton from "@/components/button/BorderButton";
import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";

const NewsTileList = ({
  news,
  position = "grid",
  className,
}: {
  news: any;
  position?: string;
  className?: string;
}) => {
  return (
    <>
      {news && news.length > 0 ? (
        <div
          className={`grid ${
            position === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          } mt-12 gap-x-9 gap-y-20 ${className}`}
        >
          {news.map((item: any) => {
            return (
              <Link
                href={`/article/${item.slug}`}
                key={item.id}
                className={`flex ${
                  position === "grid"
                    ? "flex-col gap-4"
                    : "flex-row items-center gap-16"
                }`}
              >
                <div className="bg-ghost-white">
                  <Image
                    src={`${item.coverImage.url}`}
                    width={position === "grid" ? 1364 : 663}
                    height={position === "grid" ? 663 : 663}
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
              </Link>
            );
          })}
        </div>
      ) : (
        <h3 className="text-silver-chalice text-xl italic">No news found.</h3>
      )}
    </>
  );
};

export default NewsTileList;
