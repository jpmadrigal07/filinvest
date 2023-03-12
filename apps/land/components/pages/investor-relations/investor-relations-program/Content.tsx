import Image from "next/image";
import React from "react";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import MainHeader from "@/components/header/MainHeader";

const Content = ({ content }: any) => {
  const programs = content?.content.find(
    (item: any) => item.blockType === "investor-relations-programs-programs"
  );
  const bgImage = content?.content.find(
    (item: any) => item.blockType === "investor-relations-programs-image"
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
      <section className="mt-16">
        <div className="mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
          <p className="text-dim-gray mt-8">{programs.description}</p>
        </div>
        <div className="mx-3 mt-16 flex flex-col justify-center gap-12 lg:mx-9 xl:mx-16 2xl:mx-44">
          {programs.programs.map((program: any, index: number) => {
            return (
              <div className="flex items-start gap-12 pb-8" key={index}>
                <Image
                  src={`${program.icon.url}`}
                  width={70}
                  height={70}
                  alt={program.icon.alt}
                />
                <div className="flex-1 pt-5">
                  <h3 className="text-jet text-4xl font-bold">
                    {program.title}
                  </h3>
                  <p className="text-dim-gray mt-8">{program.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <Image
            src={`${bgImage.image.url}`}
            width={2500}
            height={2500}
            alt={bgImage.image.alt}
          />
        </div>
      </section>
    </>
  );
};

export default Content;
