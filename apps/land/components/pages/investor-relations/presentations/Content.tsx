import Image from "next/image";
import React from "react";
import ArrowRight from "@/components/svg/ArrowRight";

const Content = () => {
  return (
    <section className="mt-16 mb-28 flex flex-col gap-6">
      <div className="mx-3 grid grid-cols-3 gap-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div>
          <Image
            src="/presentations-1.png"
            width={1014}
            height={794}
            alt="Picture of the author"
          />
          <div className="bg-dark-cornflower-blue flex items-center gap-4 p-4">
            <h4 className="flex-1 text-xs font-bold text-white lg:text-base">
              9M2020 Analysts Briefing
            </h4>
            <ArrowRight />
          </div>
        </div>
        <div>
          <Image
            src="/presentations-2.png"
            width={1014}
            height={794}
            alt="Picture of the author"
          />
          <div className="bg-dark-cornflower-blue flex items-center gap-4 p-4">
            <h4 className="flex-1 text-xs font-bold text-white lg:text-base">
              1H20 Analysts Briefing
            </h4>
            <ArrowRight />
          </div>
        </div>
        <div>
          <Image
            src="/presentations-3.png"
            width={1014}
            height={794}
            alt="Picture of the author"
          />
          <div className="bg-dark-cornflower-blue flex items-center gap-4 px-4 py-1 xl:p-4">
            <h4 className="flex-1 text-xs font-bold text-white lg:text-base">{`President's Report 2019 - Annual Stockholders' Meeting`}</h4>
            <ArrowRight />
          </div>
        </div>
        <div>
          <Image
            src="/presentations-4.png"
            width={1014}
            height={794}
            alt="Picture of the author"
          />
          <div className="bg-dark-cornflower-blue flex items-center gap-4 px-4 py-1 xl:p-4">
            <h4 className="flex-1 text-xs font-bold text-white lg:text-base">{`Full Year 2019 and 1st Quarter 2020 Analysts' Briefing`}</h4>
            <ArrowRight />
          </div>
        </div>
        <div>
          <Image
            src="/presentations-5.png"
            width={1014}
            height={794}
            alt="Picture of the author"
          />
          <div className="bg-dark-cornflower-blue flex items-center gap-4 p-4">
            <h4 className="flex-1 text-xs font-bold text-white lg:text-base">{`9M 2019 Analysts' Briefing`}</h4>
            <ArrowRight />
          </div>
        </div>
        <div>
          <Image
            src="/presentations-6.png"
            width={1014}
            height={794}
            alt="Picture of the author"
          />
          <div className="bg-dark-cornflower-blue flex items-center gap-4 p-4">
            <h4 className="flex-1 text-xs font-bold text-white lg:text-base">
              FY2020 Analysts Briefing
            </h4>
            <ArrowRight />
          </div>
        </div>
        <div>
          <Image
            src="/presentations-7.png"
            width={1014}
            height={794}
            alt="Picture of the author"
          />
          <div className="bg-dark-cornflower-blue flex items-center gap-4 p-4">
            <h4 className="flex-1 text-xs font-bold text-white lg:text-base">
              1Q2021 Analysts Briefing
            </h4>
            <ArrowRight />
          </div>
        </div>
        <div>
          <Image
            src="/presentations-8.png"
            width={1014}
            height={794}
            alt="Picture of the author"
          />
          <div className="bg-dark-cornflower-blue flex items-center gap-4 p-4">
            <h4 className="flex-1 text-xs font-bold text-white lg:text-base">
              1Q2021 Analysts Briefing
            </h4>
            <ArrowRight />
          </div>
        </div>
        <div>
          <Image
            src="/presentations-9.png"
            width={1014}
            height={794}
            alt="Picture of the author"
          />
          <div className="bg-dark-cornflower-blue flex items-center gap-4 p-4">
            <h4 className="flex-1 text-xs font-bold text-white lg:text-base">
              2021 Analysts Briefing
            </h4>
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
