"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ABOUT_US_SUB_ROUTES } from "../../../helpers/routes/aboutUs";

const AboutUs = () => {
  return (
    <div className="divide-sonic-silver flex divide-x py-8">
      <div className="flex-none pr-24">
        {ABOUT_US_SUB_ROUTES.map((routes, index) => {
          return (
            <div key={index} className={`${index > 0 && "mt-12"}`}>
              <Link href={routes.url} className="text-white hover:underline">
                <h3 className="text-xl text-white">{routes.name}</h3>
                <h4 className="text-white opacity-50">
                  Excepteur sint occaecat cupidatat non.
                </h4>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-1 gap-6 px-24">
        <div className="flex-1">
          <h3 className="text-xl text-white">Awards</h3>
          <h2 className="mt-4 text-4xl text-white">
            Non diam phasellus vestibulum amet volute Consequat quis
          </h2>
          <h4 className="mt-4 text-white opacity-50">
            Mattis molestie a iaculis at erat pellentesque adipiscing commodo
            nunc lobortis mattis.
          </h4>
          <div className="mt-9">
            <Image
              src="/awards-about-us.png"
              width={375}
              height={120}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-white">Awards</h3>
          <h2 className="mt-4 text-4xl text-white">
            Nam aliquam sem et tortor consequat id porta. Pretium nibh ipsum
            con.
          </h2>
          <h4 className="mt-4 text-white opacity-50">
            Mattis molestie a iaculis at erat pellentesque adipiscing commodo
            nunc lobortis mattis.
          </h4>
          <div className="mt-9">
            <Image
              src="/awards-2-about-us.png"
              width={375}
              height={120}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
