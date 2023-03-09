import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import React from "react";
import Image from "next/image";

const CompanyPolicies = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "company-policies-policy"
  );
  return (
    <section className="mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      {data.companyPolicies.map((item: any) => (
        <div>
          <div>
            <h2 className="text-jet mt-12 text-center text-4xl font-bold">
              {item.title}
            </h2>
            <p className="text-dim-gray mt-5 text-center">{item.subtitle}</p>
          </div>
          <div className="divide-gainsboro mx-3 mt-12 flex flex-col justify-center divide-y">
            {item.policies.map((policyItem: any) => (
              <div className="flex items-start gap-12 py-12">
                <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full px-4 py-4 shadow-2xl">
                  <Image
                    src={`${policyItem.icon.url}`}
                    width={1834}
                    height={1414}
                    alt={policyItem.icon.alt}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-jet text-3xl font-bold">
                    {policyItem.title}
                  </h3>
                  <p className="text-dim-gray mt-8">
                    {policyItem.description.map((descriptionItem: any) => (
                      <>{descriptionItem.descriptionParagraph}</>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-20 flex">
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

export default CompanyPolicies;
