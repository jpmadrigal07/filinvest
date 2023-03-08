import React from "react";
import Image from "next/image";
import Download from "@/components/svg/Download";
import Link from "next/link";
export default function AnnualReports({ content }: any) {
  const annualReportsBlock = content?.content.find(
    (item: any) => item.blockType === "financial-highlights-annual-reports"
  );
  return (
    <section className="mx-3 mt-16 mb-28 flex flex-col gap-9 px-6 lg:mx-9 xl:mx-16 2xl:mx-44">
      <h2 className="text-jet text-4xl font-bold">
        {annualReportsBlock?.title}
      </h2>
      <div className="mt-4 flex flex-col gap-16">
        {annualReportsBlock?.annualFinancialReports?.map(
          (item: any, index: number) => (
            <div key={index} className="flex flex-col gap-8">
              <h3 className="text-jet text-2xl font-bold">{item?.year}</h3>
              {item?.annualFinancialReport?.map((report: any) => (
                <div
                  key={report?.id}
                  className="hover:bg-ghost-white hover:cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex flex-1 items-center gap-6">
                      <div className="bg-dark-cornflower-blue flex max-h-[45px] max-w-[45px] flex-none items-center  justify-center rounded-full shadow-2xl">
                        <Image
                          src={report?.icon?.url}
                          width={60}
                          height={60}
                          alt={report?.icon?.alt}
                        />
                      </div>
                      <h4 className="flex-1 underline">
                        {report?.annualFinancialReportTitle}
                      </h4>
                    </div>
                    <Link href={report?.downloadLink} target="_blank">
                      <Download />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
}
