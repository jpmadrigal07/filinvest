"use client";
import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <section className="-mt-32 mb-32 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-40">
      <div className="flex gap-9">
        <div className="flex-1">
          <div>
            <Image
              src="/northgate-office.png"
              width={1574}
              height={882}
              alt="Picture of the author"
            />
          </div>
          <h3 className="text-jet mt-6 text-2xl font-bold">Office Parks</h3>
          <p className="text-dim-gray mt-3">{`Filinvest’s sprawling IT and Technology parks are the proud addresses of many of the country's top BPO, KPO, e-Commerce, and manufacturing companies. These massive developments inspire innovation and unparalleled productivity in an all-in-one environment.`}</p>
        </div>
        <div className="flex-1">
          <div>
            <Image
              src="/100-west-office.png"
              width={1574}
              height={882}
              alt="Picture of the author"
            />
          </div>
          <h3 className="text-jet mt-6 text-2xl font-bold">
            Corporate Centers
          </h3>
          <p className="text-dim-gray mt-3">
            Filinvest’s office buildings are built to keep pace with the needs
            of today’s businesses. Offering a host of amenities for day-to-day
            comfort and convenience, they provide prime real estate solutions
            for progressive enterprises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
