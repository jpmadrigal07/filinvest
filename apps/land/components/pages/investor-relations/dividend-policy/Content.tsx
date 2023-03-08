import Breadcrumbs from "@/components/header/Breadcrumbs";
import MainHeader from "@/components/header/MainHeader";
import Tabs from "@/components/header/Tabs";
import { serializeRichText } from "@/helpers/serializeRichText";
import React from "react";

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

  const dividendPolicyContent = content.content.find(
    (item: any) => item.blockType === "dividend-policy"
  );

  return (
    <>
      <MainHeader
        title={header.title}
        breadcrumbs={<Breadcrumbs items={breadcrumbsItems} />}
        bgUrl={header.coverImage.url}
        tabs={<Tabs items={tabItems} />}
        bgUrlSmall={header.smallCoverImage.url}
      />
      <section className="mx-3 mt-16 mb-28 flex flex-col gap-6 px-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        <h1 className="text-jet text-center text-4xl font-bold">
          {dividendPolicyContent.title}
        </h1>
        {serializeRichText(dividendPolicyContent.content)}
      </section>
    </>
  );
};

export default Content;
