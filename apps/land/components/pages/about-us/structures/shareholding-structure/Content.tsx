import PageNextPrevButton from "@/components/button/PageNextPrevButtonOld";
import Download from "@/components/svg/Download";
import React from "react";
import Table from "./Table";
import MainHeader from "@/components/header/MainHeader";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import Tabs from "@/components/header/Tabs";
import Link from "next/link";

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
  const breadcrumbs = <Breadcrumbs items={breadcrumbsItems} />;
  const tabItems = header?.tabs.map((tab: any) => {
    return {
      title: tab.link.label,
      link: tab.link.url,
    };
  });
  const tabs = <Tabs items={tabItems} />;

  const structureTitleAndText = content?.content.find(
    (item: any) => item.blockType === "structures-title-and-text"
  );

  const shareholdingStructureTable = content?.content.find(
    (item: any) => item.blockType === "structures-chart-table"
  );

  const tableColumns = shareholdingStructureTable.tableColumn.map(
    (col: any) => col?.header
  );

  /* const tableRows = shareholdingStructureTable.tableColumn.map(
    (col: any) => col?.tableData
  ); */

  const downloadLink = content?.content.find(
    (item: any) => item.blockType === "structures-download-button"
  )?.downloadLink;

  return (
    <>
      <MainHeader
        title={header.title}
        breadcrumbs={breadcrumbs}
        bgUrl={header.coverImage.url}
        bgUrlSmall={header.smallCoverImage.url}
        tabs={tabs}
      />
      <section className="mb-24 mt-9 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
        <h2 className="text-jet text-center text-3xl font-bold md:text-4xl">
          {structureTitleAndText.title}
        </h2>
        <p className="text-dim-gray mx-6 lg:mx-0">
          {structureTitleAndText.description}
        </p>
        <Table
          header={tableColumns}
          rows={[
            [
              "Common",
              <span className="flex flex-col gap-3">
                <p>{`A. L. Gotianun, Inc. ("ALGI") (formerly ALG Holdings Corporation) 32nd Floor, Parkway Corporate Center, Corporate Avenue, Filinvest City, Alabang, Muntinlupa City`}</p>
                <p>{`Majority Owner of the Company A. L. Gotianun, Inc. ("ALGI") (formerly ALG Holdings Corporation) 32nd Floor,
                Parkway Corporate Center, Corporate Avenue, Filinvest City, Alabang, Muntinlupa City`}</p>
                <p>Majority Owner of the Company</p>
              </span>,
              "Same as the Record Owner",
              "Filipino",
              <span className="flex flex-col gap-3">
                <p>7,587,823,502 (Direct)</p>
                <p>61,976,540 (Indirect)</p>
              </span>,
              "87.74% (Direct)0. 72% (Indirect)",
            ],
            [
              "Common",
              "PCD Nominee Corporation (Filipino) G/F, Philippine Stock",
              "",
              "Filipino",
              "901,940,68",
              "10.43%",
            ],
          ]}
        />
        <p className="text-dim-gray mx-6 lg:mx-0">
          {shareholdingStructureTable?.tableFooter}
        </p>
        <p className="text-dim-gray mx-6 lg:mx-0">
          {shareholdingStructureTable?.tableSubFooter}
        </p>
        <div className="mt-4 flex justify-center">
          <Link
            href={downloadLink}
            target="_blank"
            className="bg-royal-dark-blue border-sonic-silver hover:bg-oxford-blue flex gap-4 border px-12 py-6 text-white focus:shadow-lg"
          >
            <Download color="#ffffff" />
            <span>FDC Shareholding Structure</span>
          </Link>
        </div>
        <div className="mx-6 mt-24 flex lg:mx-0">
          <div className="flex-none">
            <PageNextPrevButton
              imgName="investor-relations-program-next-prev.png"
              pageName="Structures"
              isLeft={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
