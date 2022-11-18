"use client";
import Image from "next/image";
import React from "react";
import ChevronRight from "@/components/svg/ChevronRight";

const OurServices = () => {
  return (
    <section className="pt-28">
      <div className="mx-auto w-full w-full lg:w-1/3">
        <h4 className="text-dark-cornflower-blue text-center font-bold">
          OUR SERVICES
        </h4>
        <h2 className="text-jet mt-2 text-center text-4xl font-extrabold">
          Contact-less, easy, and convenient way of owning a home
        </h2>
        <h4 className="text-dim-gray mt-4 text-center">
          Go through the journey of locking for a property, submitting
          documents, paying for transactions, managing your property and your
          account through our online portals available online 24/7.
        </h4>
      </div>
      <div className="mx-3 mt-12 flex gap-4 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex-1">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              className="bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue delay-50 absolute rounded-full px-7 py-6 text-white transition"
            >
              <ChevronRight />
            </button>
            <Image
              src="/filpayall-services.png"
              width={356}
              height={364}
              alt="Picture of the author"
            />
          </div>
          <h3 className="text-jet mt-6 text-center text-2xl font-bold">
            Fil PayAll
          </h3>
        </div>
        <div className="flex-1">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              className="bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue delay-50 absolute rounded-full px-7 py-6 text-white transition"
            >
              <ChevronRight />
            </button>
            <Image
              src="/loan-calculator-services.png"
              width={356}
              height={364}
              alt="Picture of the author"
            />
          </div>
          <h3 className="text-jet mt-6 text-center text-2xl font-bold">
            Loan Calculator
          </h3>
        </div>
        <div className="flex-1">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              className="bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue delay-50 absolute rounded-full px-7 py-6 text-white transition"
            >
              <ChevronRight />
            </button>
            <Image
              src="/service-desk-services.png"
              width={356}
              height={364}
              alt="Picture of the author"
            />
          </div>
          <h3 className="text-jet mt-6 text-center text-2xl font-bold">
            Services Desk Online
          </h3>
        </div>
        <div className="flex-1">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              className="bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue delay-50 absolute rounded-full px-7 py-6 text-white transition"
            >
              <ChevronRight />
            </button>
            <Image
              src="/myhome-services.png"
              width={356}
              height={364}
              alt="Picture of the author"
            />
          </div>
          <h3 className="text-jet mt-6 text-center text-2xl font-bold">
            MyHome
          </h3>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
