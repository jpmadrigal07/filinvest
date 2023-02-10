"use client";
import React from "react";
import Image from "next/image";
import Room from "@/components/svg/Room";
import Baseball from "@/components/svg/Baseball";
import Flag from "@/components/svg/Flag";

const Content = () => {
  return (
    <section className="-mt-72 mb-16 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-[26rem]">
      <div className="relative flex justify-center">
        <Image
          src="/northgate-office.png"
          width={1574}
          height={882}
          alt="Picture of the author"
          className="z-10 hidden md:block"
        />
        <div className="absolute -bottom-[27rem] z-0 rounded-full bg-white p-12 shadow-md md:-bottom-36 md:z-50 md:shadow-none">
          <Image
            src="/northgate-logo.png"
            width={190}
            height={169}
            alt="Picture of the author"
            className="mb-6"
          />
        </div>
      </div>
      <div className="divide-gainsboro mx-6 mt-[27rem] divide-y md:mx-16 md:mt-44">
        <div className="py-9">
          <h2 className="text-jet text-4xl font-bold">Northgate Cyberzone</h2>
          <p className="text-dim-gray mt-6">
            Northgate Cyberzone is an 18.7-hectare PEZA registered IT zone in
            Filinvest City, Alabang. It is master-planned and built around the
            needs of technology-based companies engaged in BPO, KPO, education,
            software design and multimedia, call centers, e-commerce, banking
            and financial services, and other IT support businesses.
          </p>
          <p className="text-dim-gray mt-6">
            The IT park is equipped with technologically-advanced provisions
            with very competitive rates giving the park an enviable 100%
            occupancy. These businesses also enjoy tax incentives as ecozone
            locators, with access to endless possibilities that Filinvest City
            offers.
          </p>
        </div>
        <div className="flex flex-col gap-4 py-9">
          <div className="flex items-center gap-6">
            <Room />
            <h3 className="text-dark-cornflower-blue text-2xl font-bold">
              Sustainability Features
            </h3>
          </div>
          <p className="text-jet font-bold">District Cooling System (DCS)</p>
          <p className="text-dim-gray">
            The country’s biggest DCS, with a total refrigeration capacity of
            12,000 TR, providing the following benefits:
          </p>
          <ul className="text-dim-gray ml-5">
            <li>Excellent energy efficiency of up to 40%</li>
            <li>Reduction of CO2 emissions and polluting waste</li>
            <li>Reduction in Operations and Maintenance costs</li>
            <li>Reduction in water consumption</li>
            <li>Noise and vibration reduction in buildings</li>
          </ul>
          <p className="text-jet mt-4 font-bold">Filinvest City 360 Eco Loop</p>
          <p className="text-dim-gray">
            A fully integrated, electric-powered 24/7 public transport system
            within Filinvest’s master-planned community
          </p>
          <p className="text-jet mt-4 font-bold">
            Leedv4 Gold For Neighborhood Development
          </p>
          <p className="text-dim-gray">
            Within Filinvest City, a recognized LEEDv4 Gold for Neighborhood
            Development recipient. This certification serves testament to
            Filinvest City’s leadership in sustainability.
          </p>
          <p className="text-jet mt-4 font-bold">
            Five (5) LEED Gold Buildings
          </p>
          <p className="text-dim-gray">
            (1) Vector Three, (2) Axis Tower One, (3) Axis Tower Two, (4) Axis
            Tower Four, and (5) Axis Tower Three – recognized by LEED as
            forerunners in sustainability and green initiatives
          </p>
          <p className="text-jet mt-4 font-bold">Green And Open Spaces</p>
          <p className="text-dim-gray">
            A generous allocation of 60% developable areas for green and open
            spaces
          </p>
        </div>
        <div className="flex flex-col gap-4 py-9">
          <div className="flex items-center gap-6">
            <Baseball />
            <h3 className="text-dark-cornflower-blue text-2xl font-bold">
              Amenities
            </h3>
          </div>
          <p className="text-jet mt-4 font-bold">A Campus-Like Setting</p>
          <p className="text-dim-gray">
            A campus-like setting that features parks and sloped gardens
            complete with fountains, ideal for rest and relaxation – all within
            a central plaza
          </p>
          <p className="text-jet mt-4 font-bold">A 14-Wheeler Mobile Genset</p>
          <p className="text-dim-gray">
            A 14-wheeler mobile genset on standby with a capacity of 1,400 KVA,
            which can provide 48 hours of continuous back-up power to Northgate
            buildings
          </p>
          <p className="text-jet mt-4 font-bold">A Basketball Court</p>
          <p className="text-dim-gray">
            A secure environment with a 24/7 security force, a strong
            partnership with Lifeline emergency ambulance service, and its own
            fire station
          </p>
          <p className="text-jet mt-4 font-bold">PEZA-Accredited</p>
        </div>
        <div className="flex flex-col gap-4 py-9">
          <div className="flex items-center gap-6">
            <Flag />
            <h3 className="text-dark-cornflower-blue text-2xl font-bold">
              Location
            </h3>
          </div>
          <p className="text-dim-gray">
            Northgate Cyberzone is located in Filinvest City, Alabang,
            Muntinlupa City, placing it at the gateway to the CALABARZON
            (Cavite, Laguna, Batangas, Rizal, Quezon).
          </p>
          <ul className="text-dim-gray ml-5">
            <li>Accessible via all modes of transportation</li>
            <li>
              Less than fifteen (15) minutes away from Makati via the Skyway
            </li>
            <li>
              A huge potential manpower base of skilled, well-educated, and
              English-speaking personnel
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
