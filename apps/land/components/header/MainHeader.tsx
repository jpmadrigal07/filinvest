"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

const MainHeader = ({
  title,
  breadcrumbs,
  tabs,
  bgUrl = "blue-header-bg.png",
  isBlueHeader = false,
}: {
  bgUrl?: string;
  title?: string;
  breadcrumbs?: string | ReactNode;
  tabs?: ReactNode;
  isBlueHeader?: boolean;
}) => {
  return (
    <>
      {isBlueHeader ? (
        <section className="z-0">
          {title && (
            <div className="absolute w-full">
              <div
                className={`flex flex-col items-center justify-center py-48`}
              >
                <h1 className="mb-4 text-6xl font-extrabold text-white">
                  {title}
                </h1>
                {breadcrumbs && (
                  <h5 className="text-sm text-white">{breadcrumbs}</h5>
                )}
                {tabs}
              </div>
            </div>
          )}
          <div className="z-0">
            <Image
              src={`/${bgUrl}`}
              width={3844}
              height={1312}
              alt="Picture of the author"
            />
          </div>
        </section>
      ) : (
        <section className="z-0">
          <div className="absolute w-full">
            <div className={`flex flex-col items-center justify-center py-60`}>
              <h1 className="mb-4 text-6xl font-extrabold text-white">
                {title}
              </h1>
              {breadcrumbs && (
                <h5 className="text-sm text-white">{breadcrumbs}</h5>
              )}
              {tabs}
            </div>
          </div>
          <div className="z-0">
            <Image
              src={`/${bgUrl}`}
              width={3844}
              height={1312}
              alt="Picture of the author"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default MainHeader;
