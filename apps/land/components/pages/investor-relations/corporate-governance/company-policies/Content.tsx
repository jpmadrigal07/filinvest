import React from "react";
import MainHeader from "@/components/header/MainHeader";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import Tabs from "@/components/header/Tabs";
import { serializeRichText } from "@/helpers/serializeRichText";
import Note from "@/components/svg/Note";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";

type Policy = {
  id: string;
  title: string;
  description: any[];
};

type PolicyContent = {
  policies: Policy[];
};

type PolicyTitle = {
  title: string;
  subtitle: string;
};

const PolicyCard = ({
  description,
  title,
}: Pick<Policy, "title" | "description">) => {
  return (
    <div className="flex gap-7 border-b py-10">
      <div>
        <Note />
      </div>
      <div className="grow">
        <p className="mb-4 text-2xl font-black tracking-tighter md:text-3xl">
          {title}
        </p>
        <div className="flex flex-col gap-4 text-lg md:text-2xl">
          {serializeRichText(description)}
        </div>
      </div>
    </div>
  );
};

const Content = ({ content }: any) => {
  const header = content?.content.find(
    (item: any) => item.blockType === "header"
  );

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

  const tabItems = header?.tabs.map((tab: any) => {
    return {
      title: tab.link.label,
      link: tab.link.url,
    };
  });

  const policiesContent = content.content.filter(
    (item: any) => item.blockType === "company-policies-policy"
  ) as PolicyContent[];

  const policiesTitle = content.content.find(
    (item: any) => item.blockType === "company-policies-title"
  ) as PolicyTitle;

  return (
    <>
      <MainHeader
        title={header.title}
        breadcrumbs={<Breadcrumbs items={breadcrumbsItems} />}
        bgUrl={header.coverImage.url}
        tabs={<Tabs items={tabItems} />}
        bgUrlSmall={header.smallCoverImage.url}
      />
      <section className="mt-16 mb-28 flex flex-col gap-9 px-4 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="mx-3 flex flex-col justify-center">
          {policiesContent[0].policies.map((policy) => {
            return (
              <PolicyCard
                key={policy.id}
                title={policy.title}
                description={policy.description}
              />
            );
          })}
        </div>
        <div className="flex w-full flex-col items-center gap-3 py-4 text-center md:text-left">
          <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
            {policiesTitle.title}
          </h2>
          <p className="text-dim-gray text-xl">{policiesTitle.subtitle}</p>
        </div>
        <div className="mx-3 flex flex-col justify-center divide-y">
          {policiesContent[1].policies.map((policy) => {
            return (
              <PolicyCard
                key={policy.id}
                title={policy.title}
                description={policy.description}
              />
            );
          })}
        </div>
        <div className="mt-20 flex">
          <div className="w-full">
            <PageNextPrevButton content={content} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Content;
