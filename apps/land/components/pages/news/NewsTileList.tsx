"use client";
import BorderButton from "@/components/button/BorderButton";
import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NewsTileList = ({
  news,
  position = "grid",
  className,
}: {
  news: any;
  position?: string;
  className?: string;
}) => {
  const router = useRouter();
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
              <span
                onClick={() => router.push(`/article/${item.slug}`)}
                className={`grid ${
                  position === "grid"
                    ? "grid-cols-1 gap-4"
                    : "grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16"
                } cursor-pointer transition delay-150 hover:opacity-70`}
              >
                <div className="bg-ghost-white">
                  <Image
                    src={`${item.coverImage.url}`}
                    width={1364}
                    height={663}
                    alt={item.coverImage.alt}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-jet text-2xl font-bold">{item.title}</h3>
                  <p className="text-dim-gray text-sm opacity-70">
                    Posted on {moment(item.createdAt).format("ll")}
                  </p>
                  <p className="text-dim-gray mt-4 truncate">
                    {item.content[0].children[0].text}
                  </p>
                  <div className="mt-8">
                    <Link href={`/article/${item.slug}`}>
                      <BorderButton
                        buttonText="Read More"
                        textColor="dark-cornflower-blue"
                        borderColor="dark-cornflower-blue"
                      />
                    </Link>
                  </div>
                </div>
              </span>
            );
          })}
        </div>
      ) : (
        <h3 className="text-silver-chalice text-xl italic">No result</h3>
      )}
    </>
  );
};

export default NewsTileList;
