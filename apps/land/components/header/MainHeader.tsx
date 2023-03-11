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
  otherUrl,
}: {
  bgUrl?: string;
  bgUrlSmall?: string;
  title?: string;
  breadcrumbs?: string | ReactNode;
  tabs?: ReactNode;
  isBlueHeader?: boolean;
  isTitleSmall?: boolean;
  otherUrl?: string;
}) => {
  const bgUrlUpdated = bgUrl.includes("/files") ? `${bgUrl}` : `/${bgUrl}`;
  const bgUrlSmallUpdated = bgUrlSmall.includes("/files")
    ? `${bgUrlSmall}`
    : `/${bgUrlSmall}`;
  //  py-32 md:py-24 lg:mx-9 lg:py-40 xl:mx-16 2xl:mx-44 2xl:py-48
  return (
    <>
      {isBlueHeader ? (
        <section
          style={{
            backgroundImage: `url(${otherUrl ? otherUrl : bgUrlUpdated})`,
          }}
          className="relative z-0 flex h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat md:h-[450px]"
        >
          {title && (
            <div className="z-10 w-full text-center">
              <div className="mx-6 flex flex-col items-center justify-center">
                <h1
                  className={`z-10 mb-4 ${
                    isTitleSmall
                      ? "max-w-[800px] text-2xl lg:text-4xl"
                      : "text-4xl lg:text-6xl"
                  } text-center font-extrabold text-white`}
                >
                  {title}
                </h1>
                {breadcrumbs && (
                  <h5 className="z-10 text-center text-sm text-white">
                    {breadcrumbs}
                  </h5>
                )}
                {tabs}
              </div>
            </div>
          )}

          {/* <div style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}>
            <Image
              src={otherUrl ? otherUrl : bgUrlUpdated}
              width={3844}
              height={400}
              alt="bg"
              priority
            />
          </div> */}

          {/* <div className="z-0 block md:hidden">
            <Image
              src={bgUrlSmallUpdated}
              width={1036}
              height={2400}
              alt="bg"
              priority
            />
          </div> */}
        </section>
      ) : (
        <section className="z-0">
          <div className="absolute hidden w-full xl:block">
            <div
              className={`flex flex-col items-center justify-center md:mt-0 ${
                tabs ? "mt-6 py-28" : "mt-16 py-32 "
              }  md:py-24 lg:py-44 2xl:py-60`}
            >
              <h1
                className={`mb-2 text-center ${
                  tabs ? "mt-4 text-2xl" : "-mt-4 text-3xl"
                }  font-extrabold text-white md:mt-0 lg:mb-4 lg:text-6xl`}
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
          <div className="z-0 hidden xl:block">
            <Image
              src={otherUrl ? otherUrl : bgUrlUpdated}
              width={3844}
              height={1312}
              alt="bg"
              priority
            />
          </div>
          <div
            className="block w-full bg-cover bg-center bg-no-repeat py-28 xl:hidden"
            style={{
              backgroundImage: `url(${
                otherUrl ? otherUrl : bgUrlSmallUpdated
              })`,
            }}
          >
            <div
              className={`flex flex-col items-center justify-center md:mt-0 ${
                tabs ? " py-28" : "mt-16  "
              }  md:py-24 lg:py-44 2xl:py-60`}
            >
              <h1
                className={`mb-2 text-center ${
                  tabs ? "mt-4 text-2xl" : "-mt-4 text-3xl"
                }  font-extrabold text-white md:mt-0 lg:mb-4 lg:text-6xl`}
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
        </section>
      )}
    </>
  );
};

export default MainHeader;
