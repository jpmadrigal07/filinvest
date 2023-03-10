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
    <div className="mt-10 grid w-full grid-cols-2 gap-5 overflow-x-auto px-6 pb-3 sm:grid-cols-3 md:w-auto md:grid-cols-4 lg:mx-9 lg:mt-12 lg:flex lg:gap-8 xl:mx-16 2xl:mx-44">
      {items?.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            className={`${
              item.link === pathname ? "border-b-2 border-white" : ""
            } flex-shrink-0 pb-2 text-center text-sm text-white hover:border-b-2 hover:border-white lg:flex-shrink lg:text-xl`}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
