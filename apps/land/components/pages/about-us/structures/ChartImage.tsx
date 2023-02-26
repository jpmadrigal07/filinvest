import React from "react";
import Image from "next/image";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
export default function ChartImage({ content }: any) {
  const chartImageBlock = content?.content.find(
    (item: any) => item.blockType === "structures-chart-image"
  );
  return (
    <section className="mb-24 mt-9 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <h2 className="text-jet text-center text-3xl font-bold md:text-4xl">
        {chartImageBlock.title}
      </h2>
      <div className="mx-auto mt-6 w-4/5 md:mt-12 lg:w-full">
        <Image
          src={chartImageBlock?.chartImage?.url}
          width={chartImageBlock?.chartImage?.width}
          height={chartImageBlock?.chartImage?.height}
          alt={chartImageBlock?.chartImage?.alt}
        />
      </div>
      <div className="mx-6 mt-32 flex flex-col gap-12 md:flex-row md:gap-0 lg:mx-0">
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Structures"
            isLeft={true}
          />
        </div>
        <div className="hidden grow md:block"></div>
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
}
