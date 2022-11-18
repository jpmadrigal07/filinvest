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
      {items?.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            className={`${
              item.link === pathname ? "border-b-2 border-white" : ""
            }  pb-2 text-xl text-white hover:border-b-2 hover:border-white`}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
