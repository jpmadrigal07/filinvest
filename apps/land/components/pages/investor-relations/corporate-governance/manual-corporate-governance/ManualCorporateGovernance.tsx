import BorderButton from "@/components/button/BorderButton";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ManualCorporateGovernance = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "manual-corporate-governance"
  );
  return (
    <section className="mx-6 -mt-20 mb-28 flex flex-col gap-6 md:mb-28 md:-mt-16 lg:mx-9 lg:-mt-32 xl:mx-16 2xl:mx-44 2xl:-mt-48">
      <div className="flex flex-col gap-10 px-6 md:grid md:grid-cols-2 md:p-0 lg:grid-cols-4 lg:gap-12">
        {data?.codeOfBusinessEthics?.map((item: any, index: number) => (
          <div
            className="flex flex-col items-center justify-center gap-6 bg-white p-16 px-6 shadow-xl"
            key={index}
          >
            <div className="bg-dark-cornflower-blue flex w-1/2 flex-none items-center justify-center rounded-full px-6 py-6 shadow-2xl md:w-16">
              <Image
                src={`${item?.icon?.url}`}
                width={1842}
                height={1360}
                alt="Picture of the author"
                className="scale-75 md:scale-100"
              />
            </div>
            <h3 className="text-jet text-center text-xl font-bold">
              {item?.title}
            </h3>
            <Link href={item?.viewLink}>
              <BorderButton
                buttonText="View"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </Link>
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

export default ManualCorporateGovernance;
