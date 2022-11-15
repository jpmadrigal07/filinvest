import Image from "next/image";
import React from "react";
import LinkedIn from "../../../svg/LinkedIn";

const Content = () => {
  return (
    <section className="mt-16">
      <div className="mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
        <p className="text-dim-gray mt-8">
          The primary responsibility of the Investor Relations unit is to
          provide timely and relevant information to Filinvest Land, Inc.’s
          various stakeholders regarding its operations, financial performance,
          and other significant developments. Filinvest Land uses various forms
          of communication to reach out to the public.
        </p>
      </div>
      <div className="mx-3 mt-16 flex flex-col justify-center gap-12 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex items-start gap-12 pb-8">
          <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-8 px-8 shadow-2xl">
            <LinkedIn />
          </div>
          <div className="flex-1">
            <h3 className="text-jet text-4xl font-bold">Website</h3>
            <p className="text-dim-gray mt-8">
              This contains information as required by the Securities and
              Exchange Commission and the Philippine Stock Exchange. All data is
              constantly updated to reflect current data on the company.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-12 pb-8">
          <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-8 px-8 shadow-2xl">
            <LinkedIn />
          </div>
          <div className="flex-1">
            <h3 className="text-jet text-4xl font-bold">Press Releases</h3>
            <p className="text-dim-gray mt-8">
              This firm issues press releases on significant developments in the
              company.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-12 pb-8">
          <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-8 px-8 shadow-2xl">
            <LinkedIn />
          </div>
          <div className="flex-1">
            <h3 className="text-jet text-4xl font-bold">
              Quarterly analyst briefings
            </h3>
            <p className="text-dim-gray mt-8">
              This firm issues press releases on significant developments in the
              company.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-12 pb-8">
          <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-8 px-8 shadow-2xl">
            <LinkedIn />
          </div>
          <div className="flex-1">
            <h3 className="text-jet text-4xl font-bold">
              One-on-one meetings, conference calls, property tours, etc.
            </h3>
            <p className="text-dim-gray mt-8">
              These are conducted as may be requested by minority shareholders,
              potential investors, investment research personnel and the
              investing public.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/investor-relations-program-bottom.png"
          width={2018}
          height={1340}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default Content;
