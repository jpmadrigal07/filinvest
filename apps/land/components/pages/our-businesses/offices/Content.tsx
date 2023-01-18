"use client";
import React from "react";
import Image from "next/image";
import Flag from "@/components/svg/Flag";
import SelectLocation from "@/components/select/SelectLocation";
import PropertySearch from "@/components/search/PropertySearch";
import { useSearchParams } from "next/navigation";

const Content = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const unitSize = searchParams.get("unitSize");
  const priceRangeFrom = searchParams.get("priceRangeFrom");
  const priceRangeTo = searchParams.get("priceRangeTo");
  const searchQuery = {
    propertyType: "Offices",
    location: location ? location : "",
    unitSize: unitSize ? unitSize : "",
    priceRangeFrom: priceRangeFrom ? priceRangeFrom : "",
    priceRangeTo: priceRangeTo ? priceRangeTo : "",
  };
  return (
    <section className="-mt-24 mb-32 flex flex-col gap-9 2xl:-mt-32">
      <PropertySearch className="mx-9 lg:mx-0" searchQuery={searchQuery} />
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
        <div>
          <h2 className="text-jet text-center text-4xl font-bold">Offices</h2>
          <p className="text-dim-gray mt-4">
            Filinvest connects corporate clients to the right business
            environment with state-of-the-art office buildings and BPO hubs —
            from PEZA-accredited developments such as PBCom Tower and Northgate
            Cyberzone as preferred locations for outsourcing firms and major
            corporations, to smaller modern office spaces and SOHO units that
            are proving to be the ideal addresses for budding entrepreneurs and
            start-up companies.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-9 md:flex-row">
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
        <div className="mt-16">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              <h3 className="text-jet text-2xl">6 offices found</h3>
            </div>
            <div className="flex flex-none items-center gap-9">
              <h3 className="text-jet text-xl">Filter by</h3>
              <SelectLocation />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-1 flex-col gap-4">
              <Image
                src="/100-west-cyberzone.png"
                width={507}
                height={407}
                alt="Picture of the author"
              />
              <h3 className="text-jet text-2xl font-bold">
                100 West Cyberzone
              </h3>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#303030" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-jet">Offices</p>
                </button>
                <button
                  type="button"
                  className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#ffffff" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-white">Makati</p>
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <Image
                src="/100-west-cyberzone.png"
                width={507}
                height={407}
                alt="Picture of the author"
              />
              <h3 className="text-jet text-2xl font-bold">
                100 West Cyberzone
              </h3>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#303030" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-jet">Offices</p>
                </button>
                <button
                  type="button"
                  className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#ffffff" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-white">Makati</p>
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <Image
                src="/100-west-cyberzone.png"
                width={507}
                height={407}
                alt="Picture of the author"
              />
              <h3 className="text-jet text-2xl font-bold">
                100 West Cyberzone
              </h3>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#303030" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-jet">Offices</p>
                </button>
                <button
                  type="button"
                  className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#ffffff" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-white">Makati</p>
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <Image
                src="/100-west-cyberzone.png"
                width={507}
                height={407}
                alt="Picture of the author"
              />
              <h3 className="text-jet text-2xl font-bold">
                100 West Cyberzone
              </h3>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#303030" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-jet">Offices</p>
                </button>
                <button
                  type="button"
                  className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#ffffff" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-white">Makati</p>
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <Image
                src="/100-west-cyberzone.png"
                width={507}
                height={407}
                alt="Picture of the author"
              />
              <h3 className="text-jet text-2xl font-bold">
                100 West Cyberzone
              </h3>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#303030" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-jet">Offices</p>
                </button>
                <button
                  type="button"
                  className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#ffffff" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-white">Makati</p>
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <Image
                src="/100-west-cyberzone.png"
                width={507}
                height={407}
                alt="Picture of the author"
              />
              <h3 className="text-jet text-2xl font-bold">
                100 West Cyberzone
              </h3>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#303030" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-jet">Offices</p>
                </button>
                <button
                  type="button"
                  className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
                >
                  <div className="flex-none">
                    <Flag color="#ffffff" classes="w-5 h-5" />
                  </div>
                  <p className="text-md text-white">Makati</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
