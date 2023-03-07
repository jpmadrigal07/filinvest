import BorderButton from "@/components/button/BorderButton";
import ArrowRight from "@/components/svg/ArrowRight";
import RedDownTriangle from "@/components/svg/RedDownTriangle";
import Image from "next/image";
import React from "react";
import NewsStories from "@/components/pages/home/NewsStories";
import Link from "next/link";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import MainHeader from "@/components/header/MainHeader";

const Content = ({ content }: any) => {
  const relationLinks = content?.content.find(
    (item: any) => item.blockType === "investor-relations-links"
  );
  const highlights = content?.content.find(
    (item: any) => item.blockType === "investor-relations-financial-highlights"
  );
  const boxLinks = content?.content.find(
    (item: any) => item.blockType === "investor-relations-box-links"
  );
  const header = content?.content.find(
    (item: any) => item.blockType === "header"
  );
  const breadcrumbsItems = header?.breadcrumbs.map(
    (tab: any, index: number) => {
      return {
        title: tab.link.label,
        ...(index + 1 < header?.breadcrumbs?.length && { link: tab.link.url }),
      };
    }
  );
  const breadcrumbs = <Breadcrumbs items={breadcrumbsItems} />;
  return (
    <>
      <MainHeader
        title={header.title}
        breadcrumbs={breadcrumbs}
        bgUrl={header.coverImage.url}
        bgUrlSmall={header.smallCoverImage.url}
      />
      <section className="-mt-6 2xl:-mt-36">
        <div className="hidden justify-center gap-12 md:flex lg:mx-9 xl:mx-16 2xl:mx-44">
          {relationLinks.investorRelationsLinks.map(
            (link: any, index: number) => {
              return (
                <div
                  className="bg-royal-dark-blue relative flex w-[200px] flex-none flex-col items-center gap-6 p-16 px-6 shadow-xl"
                  key={index}
                >
                  <h3 className="text-center text-white">{link.title}</h3>
                  <Link
                    href={link.link}
                    className="hover:bg-ghost-white focus:bg-ghost-white absolute -bottom-6 rounded-full bg-white px-4 py-[19px] shadow-xl"
                  >
                    <ArrowRight color="#000" />
                  </Link>
                </div>
              );
            }
          )}
        </div>
        <div className="mt-16 flex flex-col gap-6 md:flex-row lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="flex-1">
            <div className="flex-none py-20 px-9">
              <div className="mx-12">
                <h2 className="text-jet text-4xl font-bold">
                  Stock Information
                </h2>
                <p className="text-dim-gray mt-6">
                  Ultricies mi quis hendrerit dolor magna eget est lorem ipsum.
                  Ut consequat semper viverra nam libero.
                </p>
                <Image
                  src={`/investor-relations-graph.png`}
                  width={498}
                  height={268}
                  alt="Picture of the author"
                  className="mt-6"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex-1 py-20 px-16">
              <div className="border-jet border-[1px]">
                <div className="flex py-6 px-12">
                  <div className="mx-12 flex items-end gap-3">
                    <h3 className="text-jet ml-7 text-sm font-bold md:text-4xl">
                      FLI
                    </h3>
                    <RedDownTriangle />
                    <h3 className="text-jet text-5xl font-bold md:text-8xl">
                      1.00
                    </h3>
                    <h4 className="text-jet text-xl font-bold md:text-4xl">
                      PHP
                    </h4>
                  </div>
                </div>
              </div>
              <div className="border-jet flex flex-col gap-2 border-b-[1px] border-solid py-6 pb-2">
                <div className="flex">
                  <h3 className="text-jet w-4/6 flex-none text-xl font-bold">
                    Open
                  </h3>
                  <h3 className="text-jet flex-none text-xl font-bold">
                    %Change
                  </h3>
                </div>
                <div className="flex">
                  <h3 className="text-jet w-4/6 flex-none text-xl">1.00</h3>
                  <h3 className="text-jet flex-none text-xl">-1.96%</h3>
                </div>
              </div>
              <div className="border-jet flex flex-col gap-2 border-b-[1px] border-solid py-4">
                <div className="flex">
                  <h3 className="text-jet w-4/6 flex-none text-xl font-bold">
                    Close
                  </h3>
                  <h3 className="text-jet flex-none text-xl font-bold">
                    52-Week High
                  </h3>
                </div>
                <div className="flex">
                  <h3 className="text-jet w-4/6 flex-none text-xl">1.02</h3>
                  <h3 className="text-jet flex-none text-xl">-1.19</h3>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <div className="flex">
                  <h3 className="text-jet w-4/6 flex-none text-xl font-bold">
                    Change
                  </h3>
                  <h3 className="text-jet flex-none text-xl font-bold">
                    52-Week Low
                  </h3>
                </div>
                <div className="flex">
                  <h3 className="text-jet w-4/6 flex-none text-xl">-0.02</h3>
                  <h3 className="text-jet flex-none text-xl">1.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-ghost-white py-24">
          <h2 className="text-jet text-center text-4xl font-bold">
            {highlights.title}
          </h2>
          <p className="text-dim-gray mt-6 text-center">
            {highlights.description}
          </p>
          <div className="mt-16 grid grid-cols-1 items-center justify-center gap-x-4 gap-y-12 px-8 md:grid-cols-3 md:px-0 lg:mx-9 xl:mx-16 2xl:mx-44">
            {highlights.highlights.map((link: any, index: number) => {
              return (
                <div className="flex gap-6" key={index}>
                  <div className="flex-none">
                    <Image
                      src={link.logo.url ? link.logo.url : ""}
                      width={95}
                      height={95}
                      alt={link.logo.alt ? link.logo.alt : ""}
                    />
                  </div>
                  <div>
                    <h3 className="text-jet text-2xl font-bold">
                      {link.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-4">
                      <h4 className="text-royal-dark-blue text-2xl font-bold">
                        {link.cost}
                      </h4>
                      <p className="text-royal-dark-blue text-sm font-bold">
                        {link.year}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-24 flex justify-center">
            <Link href={highlights.seeAllLink}>
              <BorderButton
                buttonText="See All Complete Details"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </Link>
          </div>
        </div>
        <div className="divide-gainsboro flex flex-col divide-x divide-solid md:flex-row">
          {boxLinks.investorRelationsBoxLinks.map(
            (link: any, index: number) => {
              return (
                <div className="flex-1 py-24 px-4 md:px-16" key={index}>
                  <h2 className="text-jet text-center text-4xl font-bold">
                    {link.title}
                  </h2>
                  <p className="text-dim-gray mt-6 text-center">
                    {link.description}
                  </p>
                  <div className="mt-12 flex justify-center">
                    <Link href={link.buttonLink}>
                      <BorderButton
                        buttonText={link.buttonText}
                        textColor={
                          link.isButtonDownload === "yes"
                            ? "white"
                            : "dark-cornflower-blue"
                        }
                        borderColor="dark-cornflower-blue"
                        bgColor={
                          link.isButtonBlue === "yes"
                            ? "dark-cornflower-blue"
                            : "transparent"
                        }
                      />
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <NewsStories className="mb-24" isHomePage={false} />
      </section>
    </>
  );
};

export default Content;
