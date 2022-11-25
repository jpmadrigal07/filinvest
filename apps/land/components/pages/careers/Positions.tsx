"use client";
import CareersModal from "@/components/modal/CareersModal";
import MapPin from "@/components/svg/MapPin";
import PhoneBlue from "@/components/svg/PhoneBlue";
import { combineClass } from "@/helpers/combineClass";
import Link from "next/link";
import React, { useState } from "react";
import Accordion from "./Accordion";
import Requirements from "./Requirements";

const Positions = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const tabs = [
    { name: "All", href: "#", current: true },
    { name: "Business", href: "#", current: false },
    { name: "Finance", href: "#", current: false },
    { name: "Human Resources", href: "#", current: false },
    { name: "Information Technology", href: "#", current: false },
    { name: "Marketing", href: "#", current: false },
    { name: "Sales", href: "#", current: false },
    { name: "Technical", href: "#", current: false },
  ];
  return (
    <div className="mt-12">
      <div className="border-alice-blue border-b">
        <nav
          className="-mb-px flex items-center justify-center space-x-8"
          aria-label="Tabs"
        >
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={combineClass(
                tab.current
                  ? "border-dark-cornflower-blue text-dark-cornflower-blue"
                  : "text-jet hover:text-dark-cornflower-blue hover:border-dark-cornflower-blue border-transparent",
                "group inline-flex items-center border-b-2 py-2 px-4 text-xl font-medium"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              <span>{tab.name}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="divide-alice-blue divide-y">
        <div className="mx-32 mt-9 2xl:mx-56">
          <div className="flex flex-col gap-5">
            <Accordion title="Accounting Analyst" description="MANDALUYONG">
              <Requirements setModalOpen={setIsFormModalOpen} />
            </Accordion>
            <Accordion title="Accounting Assistant" description="MANDALUYONG">
              <Requirements setModalOpen={setIsFormModalOpen} />
            </Accordion>
            <Accordion title="Accounting Supervisor" description="MANDALUYONG">
              <Requirements setModalOpen={setIsFormModalOpen} />
            </Accordion>
            <Accordion title="Accounting Analyst" description="MANDALUYONG">
              <Requirements setModalOpen={setIsFormModalOpen} />
            </Accordion>
            <Accordion
              title="Administrative Assistant"
              description="MANDALUYONG"
            >
              <Requirements setModalOpen={setIsFormModalOpen} />
            </Accordion>
            <Accordion title="Broker Sales Manager" description="MANDALUYONG">
              <Requirements setModalOpen={setIsFormModalOpen} />
            </Accordion>
            <div className="mb-9 flex justify-center gap-4">
              <div className="bg-dark-cornflower-blue px-3 py-[5px] text-white">
                1
              </div>
              <div className="border-dark-cornflower-blue text-jet border-[1px] px-3 py-[5px]">
                2
              </div>
              <div className="border-dark-cornflower-blue text-jet border-[1px] px-3 py-[5px]">
                3
              </div>
              <div className="border-dark-cornflower-blue text-jet border-[1px] px-3 py-[5px]">
                4
              </div>
              <div className="border-dark-cornflower-blue text-jet border-[1px] px-3 py-[5px]">
                5
              </div>
              <div className="border-dark-cornflower-blue text-jet border-[1px] px-3 py-[5px]">
                6
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9 pt-14 pb-24">
          <h2 className="text-dark-cornflower-blue text-4xl font-bold">
            Call our HR department at:
          </h2>
          <div className="mx-9 mt-14 grid grid-cols-3 gap-4 2xl:mx-14">
            <div className="bg-cultured flex flex-col gap-3 p-8">
              <div className="flex items-center gap-3">
                <div className="flex-none">
                  <MapPin />
                </div>
                <p className="font-bold">Filinvest Land, Inc. - Head Office</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-none">
                  <PhoneBlue />
                </div>
                <p>(63 2) 7918-818 loc. 6112, 6114, 6119, 6333</p>
              </div>
            </div>
            <div className="bg-cultured flex flex-col gap-3 p-8">
              <div className="flex items-center gap-3">
                <div className="flex-none">
                  <MapPin />
                </div>
                <p className="font-bold">
                  Filinvest Land, Inc. - Alabang Office
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-none">
                  <PhoneBlue />
                </div>
                <p>(63 2) 8842-9874</p>
              </div>
            </div>
            <div className="bg-cultured flex flex-col gap-3 p-8">
              <div className="flex items-center gap-3">
                <div className="flex-none">
                  <MapPin />
                </div>
                <p className="font-bold">Filinvest Alabang, Inc.</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-none">
                  <PhoneBlue />
                </div>
                <p>(63 2) 8846-0278 loc. 7010, 7042</p>
              </div>
            </div>
            <div className="bg-cultured flex flex-col gap-3 p-8">
              <div className="flex items-center gap-3">
                <div className="flex-none">
                  <MapPin />
                </div>
                <p className="font-bold">Festival Mall Office</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-none">
                  <PhoneBlue />
                </div>
                <p>(63 2) 8850-3575 and 8850-3517 loc. 230</p>
              </div>
            </div>
            <div className="bg-cultured flex flex-col gap-3 p-8">
              <div className="flex items-center gap-3">
                <div className="flex-none">
                  <MapPin />
                </div>
                <p className="font-bold">Filinvest Land, Inc. - Cebu Office</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-none">
                  <PhoneBlue />
                </div>
                <p>(63 32) 517-1888 loc. 1512</p>
              </div>
            </div>
            <div className="bg-cultured flex flex-col gap-3 p-8">
              <div className="flex items-center gap-3">
                <div className="flex-none">
                  <MapPin />
                </div>
                <p className="font-bold">Filinvest Land, Inc. - Davao Office</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-none">
                  <PhoneBlue />
                </div>
                <p>(63 82) 226-8802</p>
              </div>
            </div>
          </div>
          <p className="text-jet mx-9 mt-6 2xl:mx-14">
            Or email us at{" "}
            <Link
              href="mailto:WeRecruitTalent@filinvestland.com"
              className="text-dark-cornflower-blue hover:underline"
            >
              WeRecruitTalent@filinvestland.com
            </Link>
          </p>
        </div>
      </div>
      <CareersModal setOpen={setIsFormModalOpen} open={isFormModalOpen} />
    </div>
  );
};

export default Positions;
