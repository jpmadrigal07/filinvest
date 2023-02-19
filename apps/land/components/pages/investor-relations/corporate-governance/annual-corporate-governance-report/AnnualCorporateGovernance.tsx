import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import React from "react";

const AnnualCorporateGovernance = ({ content }: any) => {
  return (
    <section className="-mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-52">
      <div className="grid grid-cols-4 gap-12">
        {content.content[0].reportList.map((item) => (
          <div className="flex h-full flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
            <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full px-6 py-6 shadow-2xl">
              <Image
                src={`${item.icon.url}`}
                width={1842}
                height={1360}
                alt={item.icon.alt}
              />
            </div>
            <h3 className="text-jet text-xl font-bold">{item.year}</h3>
            <ul className="text-jet text-lg underline">
              {item.reportBullets.map((bullet: any) => (
                <li>{bullet.report}</li>
              ))}
            </ul>
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
