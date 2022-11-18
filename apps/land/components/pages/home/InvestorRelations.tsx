"use client";
import React from "react";
import Image from "next/image";
import ChevronCircleLeft from "@/components/svg/ChevronCircleLeft";
import ChevronCircleRight from "@/components/svg/ChevronCircleRight";
import BorderButton from "@/components/button/BorderButton";

const InvestorRelations = () => {
  return (
    <section className="justfify-center mx-3 flex gap-24 pt-44 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div className="w-1/3 flex-none">
        <h4 className="text-dark-cornflower-blue font-bold">
          INVESTOR RELATIONS
        </h4>
        <h2 className="text-jet mt-2 text-4xl font-extrabold">
          Investment Highlights
        </h2>
        <h4 className="text-dim-gray mt-4">
          Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Ut
          consequat semper viverra nam libero justo laoreet sit.
        </h4>
        <button type="button" className="mt-16">
          <BorderButton
            buttonText="Learn More"
            textColor="dark-cornflower-blue"
            borderColor="dark-cornflower-blue"
          />
        </button>
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex flex-1 gap-9">
          <div className="flex min-w-[450px] items-center gap-9">
            <div className="flex-none">
              <Image
                src="/pie-chart.png"
                width={120}
                height={120}
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h2 className="text-2xl font-bold">
                Net income attributable to
                <br />
                equity holders of parent
              </h2>
              <div className="mt-3 flex items-center gap-6">
                <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                  P 3.80 B
                </h3>
                <p className="text-dark-cornflower-blue text-normal">
                  Year 2021
                </p>
              </div>
            </div>
          </div>
          <div className="flex min-w-[450px] items-center gap-9">
            <div className="flex-none">
              <Image
                src="/pie-chart.png"
                width={120}
                height={120}
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h2 className="text-2xl font-bold">Revenue</h2>
              <div className="mt-3 flex items-center gap-6">
                <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                  P 17.74B B
                </h3>
                <p className="text-dark-cornflower-blue text-normal">
                  Year 2021
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 gap-9">
          <div className="flex min-w-[450px] items-center gap-9">
            <div className="flex-none">
              <Image
                src="/pie-chart.png"
                width={120}
                height={120}
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h2 className="text-2xl font-bold">Total Assets</h2>
              <div className="mt-3 flex items-center gap-6">
                <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                  P 193.22 B B
                </h3>
                <p className="text-dark-cornflower-blue text-normal">
                  Year 2021
                </p>
              </div>
            </div>
          </div>
          <div className="flex min-w-[450px] items-center gap-9">
            <div className="flex-none">
              <Image
                src="/pie-chart.png"
                width={120}
                height={120}
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h2 className="text-2xl font-bold">Earnings per share</h2>
              <div className="mt-3 flex items-center gap-6">
                <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                  P 0.16 B
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 ml-16 flex gap-6">
          <ChevronCircleLeft />
          <ChevronCircleRight />
        </div>
      </div>
    </section>
  );
};

export default InvestorRelations;
