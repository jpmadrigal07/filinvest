import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const AnnualCorporateGovernance = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "annual-corporate-governance-and-report"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageLength = Math.ceil(data?.reportList.length / itemsPerPage);

  const [active, setActive] = useState(
    data.reportList.slice(startIndex, endIndex)
  );
  // const [lastEnd, setLastEnd] = useState(1);

  const paginationHandler = (page: number) => {
    // console.log({ page, currentPage });
    setCurrentPage(page);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setActive(data.reportList.slice(startIndex, endIndex));
    // setLastEnd(endIndex);
  }, [currentPage, data.reportList, itemsPerPage]);

  return (
    <section className="mx-6 -mt-20 mb-28 flex flex-col gap-6 md:-mt-16 lg:mx-9 lg:-mt-20 xl:mx-16 2xl:mx-44 2xl:-mt-20">
      <div className="flex flex-wrap items-center justify-center gap-10">
        {active?.map((item: any, index: number) => (
          <div
            className="flex h-[400px] w-full flex-col items-center justify-center gap-6 bg-white p-14 px-12 shadow-xl sm:w-[45%] xl:w-1/4"
            key={index}
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
      <div className="mt-20 flex items-center justify-center gap-5">
        {Array.from(Array(pageLength).keys()).map((item, index) => (
          <button
            className={
              currentPage === item + 1
                ? "bg-dark-cornflower-blue border-dark-cornflower-blue border px-3 py-1.5 text-white"
                : 'text-black" border-dark-cornflower-blue border px-3 py-1.5'
            }
            key={index}
            onClick={() => {
              paginationHandler(item + 1);
            }}
          >
            {item + 1}
          </button>
        ))}
      </div>
      <div className="mt-32 flex w-full">
        <PageNextPrevButton content={content} />
      </div>
    </section>
  );
};

export default AnnualCorporateGovernance;
