import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import React from "react";
import { serializeRichText } from "@/helpers/serializeRichText";
import Note from "@/components/svg/Note";

const CompanyPolicies = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "company-policies-policy"
  );
  return (
    <section className="mt-16 mb-28 flex flex-col gap-10 px-4 lg:mx-9 xl:mx-16 2xl:mx-44">
      {data.companyPolicies.map((item: any) => (
        <>
          {item.title || item.subtitle ? (
            <div className="flex flex-col gap-3 py-12">
              {item.title ? (
                <h2 className="text-jet text-center text-4xl font-bold tracking-tighter md:text-5xl">
                  {item.title}
                </h2>
              ) : null}
              {item.subtitle ? (
                <p className="text-dim-gray text-center text-xl md:text-2xl">
                  {item.subtitle}
                </p>
              ) : null}
            </div>
          ) : null}
          <div className="divide-gainsboro mx-3 flex flex-col justify-center divide-y border-b border-b-gray-200">
            {item.policies.map((policyItem: any) => (
              <div className="flex items-start gap-7 py-12 first:pt-0">
                <Note />
                <div className="flex-1">
                  <h3 className="text-jet py-2 text-2xl font-black tracking-tight md:text-3xl">
                    {policyItem.title}
                  </h3>
                  <div className="flex flex-col gap-4 py-2 text-xl leading-8 md:text-2xl">
                    {serializeRichText(policyItem.descriptionParagraph)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
      <PageNextPrevButton content={content} />
    </section>
  );
};

export default CompanyPolicies;
