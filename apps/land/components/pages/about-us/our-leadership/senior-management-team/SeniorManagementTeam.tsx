"use client";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import React, { useState } from "react";
import Image from "next/image";
import Facebook from "@/components/svg/Facebook";
import Twitter from "@/components/svg/Twitter";
import LinkedIn from "@/components/svg/LinkedIn";
import BioInfo from "@/components/drawer/BioInfo";
import useGetScreen from "../../../../../hooks/useGetScreen";
const SeniorManagementTeam = ({ content }: any) => {
  const { width } = useGetScreen();
  const data = content?.content.find(
    (item: any) => item.blockType === "our-leadership-senior-management-team"
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [directorInformation, setDirectorInformation] = useState({});

  return (
    <section className="short:-mt-24 mx-9 -mt-16 mb-28 flex flex-col gap-9 xl:mx-16 2xl:mx-44 2xl:-mt-52">
      <div className="py-32 lg:bg-white lg:py-32 lg:px-32">
        <h2 className="text-jet text-2xl font-bold md:text-4xl">
          {data.title}
        </h2>
        <p className="text-dim-gray mt-6">{data.description}</p>
        <div
          className={`mt-12 grid  gap-x-8 gap-y-16  ${
            width <= 1210 && width >= 768 && "grid-cols-2"
          }
          ${width <= 767 && "grid-cols-1"}
           ${
             width >= 1211 &&
             `grid-cols-${data?.numberOfColumns ? data?.numberOfColumns : "4"}`
           }
            ${
              width == 0 &&
              `grid-cols-${data?.numberOfColumns ? data?.numberOfColumns : "4"}`
            }
          `}
        >
          {data.director.map((director: any, index: number) => (
            <div className="group relative" key={index}>
              <Image
                src={`${director.directorImage.url}`}
                width={736}
                height={848}
                alt="Picture of the author"
              />
              <div className="absolute -bottom-6 z-20 w-full">
                <div className="flex h-full justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      setSidebarOpen(true);
                      setDirectorInformation(director);
                    }}
                  >
                    {" "}
                    <Image
                      src={`/button-person.png`}
                      width={47}
                      height={47}
                      alt="Picture of the author"
                      className="hover:cursor-pointer"
                    />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-t from-black group-hover:hidden">
                <div className="flex h-full flex-col items-center justify-center px-6">
                  <h3 className="text-center text-xl font-bold text-white">
                    {director.directorFullName}
                  </h3>
                  <h4 className="text-center text-white">
                    {director.directorTitle}
                  </h4>
                </div>
              </div>
              <div className="absolute bottom-0 z-10 hidden h-1/2 w-full group-hover:block">
                <div className="flex h-full justify-center gap-6">
                  {director.facebookLink ? (
                    <a
                      href={`${director.facebookLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Facebook />
                    </a>
                  ) : null}
                  {director.twitterLink ? (
                    <a
                      href={`${director.twitterLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Twitter />
                    </a>
                  ) : null}
                  {director.linkedInLink ? (
                    <a
                      href={`${director.linkedInLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedIn />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32 flex w-full">
        <PageNextPrevButton content={content} />
      </div>
      <BioInfo
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        information={directorInformation}
      />
    </section>
  );
};

export default SeniorManagementTeam;
