import Image from "next/image";
import React from "react";
import ArrowRight from "@/components/svg/ArrowRight";
import MainHeader from "@/components/header/MainHeader";
import Breadcrumbs from "@/components/header/Breadcrumbs";

type PresentationCardProps = {
  imageSrc: string;
  imageAlt: string;
  cardTitle: string;
};

const PresentationCard = ({
  imageSrc,
  imageAlt,
  cardTitle,
}: PresentationCardProps) => {
  return (
    <div>
      <Image src={imageSrc} width={1014} height={794} alt={imageAlt} />
      <div className="bg-dark-cornflower-blue flex h-[85px] items-center gap-4 pl-[30px] pr-6">
        <p
          title={cardTitle}
          className="line-clamp-3 flex-1 text-base font-bold text-white md:text-base lg:text-lg xl:text-xl"
        >
          {cardTitle}
        </p>
        <ArrowRight />
      </div>
    </div>
  );
};

const Content = ({ content }: any) => {
  const header = content?.content.find(
    (item: any) => item.blockType === "header"
  );

  const presentations: any[] = content.content.find(
    (item: any) => item.blockType === "presentations"
  ).presentation;

  const breadcrumbsItems = header?.breadcrumbs.map(
    (tab: any, index: number) => {
      return {
        title: tab.link.label,
        ...(index + 1 < header?.breadcrumbs?.length && {
          link: tab.link.url,
        }),
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
      <section className="mt-16 mb-28 flex flex-col gap-6">
        <div className="mx-3 grid gap-6 sm:grid-cols-2 lg:mx-9 lg:grid-cols-3 xl:mx-16 2xl:mx-44">
          {presentations.map((presentation) => {
            return (
              <PresentationCard
                key={presentation.id}
                imageSrc={`/${presentation.image.filename}`}
                imageAlt={presentation.image.alt}
                cardTitle={presentation.title}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Content;
