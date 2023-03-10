import BorderButton from "@/components/button/BorderButton";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import React from "react";

const ManualCorporateGovernance = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "manual-corporate-governance"
  );
  return (
    <section className="-mt-16 flex flex-col gap-9 md:mb-28 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-52">
      <div className="flex grid-cols-3 flex-col gap-12 px-6 md:grid md:p-0">
        {data.codeOfBusinessEthics.map((item: any, index: number) => (
          <div
            className="flex flex-col items-center gap-6 bg-white p-16 px-6 shadow-xl"
            key={index}
          >
            <div className="bg-dark-cornflower-blue flex w-1/2 flex-none items-center justify-center rounded-full px-6 py-6 shadow-2xl md:w-16">
              <Image
                src={`${item.icon.url}`}
                width={1842}
                height={1360}
                alt="Picture of the author"
                className="scale-75 md:scale-100"
              />
            </div>
            <h3 className="text-jet text-xl font-bold">{item.title}</h3>
            <BorderButton
              buttonText="View"
              textColor="dark-cornflower-blue"
              borderColor="dark-cornflower-blue"
            />
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
