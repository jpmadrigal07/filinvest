"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { ABOUT_US_SUB_ROUTES } from "@/helpers/routes/aboutUs";

type T_AboutUsMenu = {
  title: string;
  subTitle?: string;
  link: string;
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
      <div className="flex-none pr-24">
        {aboutUsMenu &&
          aboutUsMenu.map((routes: T_AboutUsMenu, index: number) => {
            return (
              <div key={index} className={`${index > 0 && "mt-12"}`}>
                <Link href={routes.link} className="text-white hover:underline">
                  <h3 className="text-xl text-white">{routes.title}</h3>
                  <h4 className="text-white opacity-50">{routes.subTitle}</h4>
                </Link>
              </div>
            );
          })}
      </div>
      <div className="flex flex-1 gap-6 px-24">
        <div className="flex-1">
          <h3 className="text-xl text-white">Awards</h3>
          <h2 className="mt-4 text-4xl text-white">
            {firstAwards.value.title}
          </h2>
          <h4 className="mt-4 text-white opacity-50">
            {firstAwards.value.description}
          </h4>
          <div className="mt-9">
            <Image
              src={`${process.env.CMS_API_URL}${firstAwards.value.coverImage.url}`}
              width={firstAwards.value.coverImage.width}
              height={firstAwards.value.coverImage.height}
              alt="awards"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-white">Awards</h3>
          <h2 className="mt-4 text-4xl text-white">
            {secondAwards.value.title}
          </h2>
          <h4 className="mt-4 text-white opacity-50">
            {secondAwards.value.description}
          </h4>
          <div className="mt-9">
            <Image
              src={`${process.env.CMS_API_URL}${secondAwards.value.coverImage.url}`}
              width={secondAwards.value.coverImage.width}
              height={secondAwards.value.coverImage.height}
              alt="awards"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
