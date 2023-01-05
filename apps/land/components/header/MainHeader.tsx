"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

const MainHeader = ({
  title,
  breadcrumbs,
  tabs,
  bgUrl = "blue-header-bg.png",
  bgUrlSmall = "blue-header-bg-small.png",
  isBlueHeader = false,
  isTitleSmall = false,
}: {
  bgUrl?: string;
  bgUrlSmall?: string;
  title?: string;
  breadcrumbs?: string | ReactNode;
  tabs?: ReactNode;
  isBlueHeader?: boolean;
  isTitleSmall?: boolean;
}) => {
  return (
    <>
      {isBlueHeader ? (
        <section className="z-0">
          {title && (
            <div className="absolute w-full">
              <div
                className={`flex flex-col items-center justify-center py-40 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:py-48`}
              >
                <h1
                  className={`mb-4 ${
                    isTitleSmall ? "text-4xl" : "text-6xl"
                  } text-center font-extrabold text-white`}
                >
                  {title}
                </h1>
                {breadcrumbs && (
                  <h5 className="text-sm text-white">{breadcrumbs}</h5>
                )}
                {tabs}
              </div>
            </div>
          )}
          <div className="z-0 hidden md:block">
            <Image
              src={`/${bgUrl}`}
              width={3844}
              height={1312}
              alt="Picture of the author"
            />
          </div>
          <div className="z-0 block md:hidden">
            <Image
              src={`/${bgUrlSmall}`}
              width={1036}
              height={806}
              alt="Picture of the author"
            />
          </div>
        </section>
      ) : (
        <section className="z-0">
          <div className="absolute w-full">
            <div
              className={`flex flex-col items-center justify-center ${
                tabs ? "py-28" : "py-32"
              }  md:py-24 lg:py-44 2xl:py-60`}
            >
              <h1
                className={`mb-2 ${
                  tabs ? "text-2xl" : "text-3xl"
                } font-extrabold text-white lg:mb-4 lg:text-6xl`}
              >
                {title}
              </h1>
              {breadcrumbs && (
                <h5 className="text-center text-xs text-white lg:text-sm">
                  {breadcrumbs}
                </h5>
              )}
              {tabs}
            </div>
          </div>
          <div className="z-0 hidden md:block">
            <Image
              src={`/${bgUrl}`}
              width={3844}
              height={1312}
              alt="Picture of the author"
            />
          </div>
          <div className="z-0 block md:hidden">
            <Image
              src={`/${bgUrlSmall}`}
              width={1036}
              height={806}
              alt="Picture of the author"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default MainHeader;
