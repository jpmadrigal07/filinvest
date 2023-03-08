"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { ABOUT_US_SUB_ROUTES } from "@/helpers/routes/aboutUs";

type T_AboutUsMenu = {
  title: string;
  subTitle?: string;
  link: string;
  newTab: boolean;
};
const AboutUs = ({
  aboutUsMenu,
  firstAwards,
  secondAwards,
}: {
  aboutUsMenu?: T_AboutUsMenu[];
  firstAwards: any;
  secondAwards: any;
}) => {
  return (
    <div className="divide-sonic-silver flex divide-x py-8">
      <div className="max-h-[700px] flex-none overflow-hidden pr-24 hover:overflow-auto">
        {aboutUsMenu &&
          aboutUsMenu.map((routes: T_AboutUsMenu, index: number) => {
            return (
              <div key={index} className={`${index > 0 && "mt-9"}`}>
                <Link
                  href={routes.link}
                  target={routes.newTab ? "_blank" : "_self"}
                  className="text-white transition delay-150 hover:opacity-70"
                >
                  <h3 className="text-xl text-white">{routes.title}</h3>
                  <h4 className="text-white opacity-50">{routes.subTitle}</h4>
                </Link>
              </div>
            );
          })}
      </div>
      <div className="grid max-h-[700px] grid-cols-2 gap-6 overflow-hidden px-24 hover:overflow-auto">
        <Link
          href={`/awards`}
          className="cursor-pointer transition delay-150 hover:opacity-70"
        >
          <h3 className="truncate text-xl text-white">Awards</h3>
          <h2 className="mt-4 truncate text-4xl text-white">
            {firstAwards.value.title}
          </h2>
          <h4 className="mt-4 truncate text-white opacity-50">
            {firstAwards.value.description}
          </h4>
          <div className="mt-9">
            <Image
              src={`${!firstAwards.value.coverImage.url ? "/" : ""}${
                firstAwards.value.coverImage.url
              }`}
              width={512}
              height={512}
              alt="awards"
            />
          </div>
        </Link>
        <Link
          href={`/awards`}
          className="cursor-pointer transition delay-150 hover:opacity-70"
        >
          <h3 className="text-xl text-white">Awards</h3>
          <h2 className="mt-4 truncate text-4xl text-white">
            {secondAwards.value.title}
          </h2>
          <h4 className="mt-4 truncate text-white opacity-50">
            {secondAwards.value.description}
          </h4>
          <div className="mt-9">
            <Image
              src={`${!secondAwards.value.coverImage.url ? "/" : ""}${
                secondAwards.value.coverImage.url
              }`}
              width={512}
              height={512}
              alt="awards"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
