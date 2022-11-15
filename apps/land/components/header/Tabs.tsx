"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type ItemProps = {
  title: string;
  link: string;
};

const Tabs = ({ items }: { items: ItemProps[] }) => {
  const pathname = usePathname();

  return (
    <div className="mt-12 flex gap-8">
      {items?.map((item) => {
        return (
          <div
            className={`${
              item.link === pathname ? "border-b-2 border-white" : ""
            }  pb-2 hover:border-b-2 hover:border-white`}
          >
            <Link href={item.link} className="text-xl text-white">
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
