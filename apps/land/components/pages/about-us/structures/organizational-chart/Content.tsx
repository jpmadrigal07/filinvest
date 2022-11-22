import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section className="mb-24 mt-9 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <h2 className="text-jet text-center text-4xl font-bold">
        Organizational Chart
      </h2>
      <div className="mt-12">
        <Image
          src="/organizational-chart.png"
          width={3458}
          height={2642}
          alt="Picture of the author"
        />
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

export default Content;
