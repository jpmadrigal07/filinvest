import React from "react";
import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import Breadcrumbs from "@/components/header/Breadcrumbs";
import Tabs from "@/components/header/Tabs";

type TotalDividend = {
  totalDividend: string;
  id: string;
};

type PayoutRate = {
  payoutRate: string;
  id: string;
};

type TotalDividendsRow = {
  totalDividendsRowTitle: string;
  totalDividends: TotalDividend[];
};

type PayoutRateRow = {
  payoutRateRowTitle: string;
  payoutRates: PayoutRate[];
};

type DividendHistoryTable = {
  totalDividendsRow: TotalDividendsRow;
  payoutRateRow: PayoutRateRow;
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

  const dividendsContent = content.content.find(
    (item: any) => item.blockType === "dividend-history"
  );

  const { totalDividendsRow, payoutRateRow } = content.content.find(
    (item: any) => item.blockType === "dividend-history-table"
  ) as DividendHistoryTable;

  return (
    <>
      <MainHeader
        title={header.title}
        breadcrumbs={<Breadcrumbs items={breadcrumbsItems} />}
        bgUrl={header.coverImage.url}
        tabs={<Tabs items={tabItems} />}
        bgUrlSmall={header.smallCoverImage.url}
      />
      <section className="mx-3 mt-16 mb-28 flex flex-col gap-9 px-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div>
          <p className="text-dark-cornflower-blue m-0 text-center font-bold">
            {dividendsContent.title}
          </p>
          <h2 className="text-jet text-center text-4xl font-bold">
            {dividendsContent.mainTitle}
          </h2>
        </div>
        <h3 className="text-dim-gray text-center text-xl">
          {dividendsContent.description}
        </h3>
        <div className="mx-0 lg:mx-32">
          <Image
            src={`/${dividendsContent.file.filename}`}
            width={2998}
            height={1822}
            alt={dividendsContent.file.alt}
          />
        </div>
        <div className="mt-4 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-dark-cornflower-blue">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-lg font-semibold text-white sm:pl-6"
                      >
                        {totalDividendsRow.totalDividendsRowTitle}
                      </th>
                      {totalDividendsRow.totalDividends.map(
                        ({ totalDividend, id }) => (
                          <th
                            key={id}
                            scope="col"
                            className="py-3.5 pl-4 pr-4 text-left text-lg font-semibold text-white sm:pl-6"
                          >
                            {totalDividend}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="divide-x divide-gray-200">
                      <td className="bg-alice-blue whitespace-nowrap py-4 pl-4 pr-4 text-lg font-semibold text-gray-900 sm:pl-6">
                        {payoutRateRow.payoutRateRowTitle}
                      </td>
                      {payoutRateRow.payoutRates.map(({ payoutRate, id }) => {
                        return (
                          <td
                            key={id}
                            className="whitespace-nowrap py-4 pl-4
                            pr-4 text-2xl font-semibold text-gray-900 last:text-3xl last:font-bold sm:pl-6"
                          >
                            {payoutRate}
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
