import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnnualCorporateGovernance = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "annual-corporate-governance-and-report"
  );
  return (
    <section className="mx-6 -mt-20 mb-28 flex flex-col gap-6 md:-mt-16 lg:mx-9 lg:-mt-32 xl:mx-16 2xl:mx-44 2xl:-mt-48">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {data?.reportList.map((item: any, index: number) => (
          <div
            key={index}
            className="flex h-full flex-col items-center gap-6 bg-white p-14 px-12 shadow-xl"
          >
            <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full px-6 py-6 shadow-2xl">
              <Image
                src={`${item?.icon?.url}`}
                width={1842}
                height={1360}
                alt={item?.icon?.alt}
              />
            </div>
            <h3 className="text-2xl font-bold text-[#444444] md:text-3xl">
              {item?.year}
            </h3>
            <div className="text-report text-base underline lg:text-lg">
              {item?.reportBullets.map((bullet: any, i: number) => (
                <div key={i} className="mt-2">
                  <div className="relative flex">
                    <div className="bg-dark-cornflower-blue absolute top-0 right-0 bottom-0 left-0 mt-2 h-2 w-2 rotate-45" />
                    <Link href={bullet?.report_link} className="ml-5">
                      {bullet?.report}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-32 flex">
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Structures"
            isLeft={true}
          />
        </div>
        <div className="grow"></div>
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Investor Relations Program"
            isLeft={false}
          />
        </div>
      </div>
    </section>
  );
};

export default AnnualCorporateGovernance;
