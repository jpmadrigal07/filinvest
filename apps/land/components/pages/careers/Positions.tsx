"use client";
import CareersModal from "@/components/modal/CareersModal";
import { combineClass } from "@/helpers/combineClass";
import React, { useState } from "react";
import Accordion from "./Accordion";
import CareerContent from "./CareerContent";
import useGetCareers from "./hooks/useGetCareers";
import { Career } from "shared-types";
import CareersCallHr from "./CareersCallHr";

const Positions = ({ content }: any) => {
  const {
    data: careersRes,
    isLoading,
    category,
    setCategory,
  } = useGetCareers();
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  const tabs = [
    "All",
    "Business",
    "Finance",
    "Human Resources",
    "Information Technology",
    "Marketing",
    "Sales",
    "Technical",
  ];

  return (
    <div className="mt-12">
      <div className="border-alice-blue border-b">
        <nav
          className="flex items-center overflow-auto md:justify-center md:-space-x-4 lg:space-x-8"
          aria-label="Tabs"
        >
          {tabs.map((tab, i) => (
            <span
              key={i}
              className={combineClass(
                tab === category
                  ? "border-dark-cornflower-blue text-dark-cornflower-blue"
                  : "text-jet hover:text-dark-cornflower-blue hover:border-dark-cornflower-blue border-transparent",
                "group inline-flex cursor-pointer items-center border-b-2 py-2 px-4 text-xl font-medium"
              )}
              aria-current={tab ? "page" : undefined}
              onClick={() => setCategory(tab)}
            >
              <span>{tab}</span>
            </span>
          ))}
        </nav>
      </div>
      <div className="divide-alice-blue divide-y">
        <div className="mx-0 mt-9 lg:mx-32 2xl:mx-56">
          <div className="flex flex-col gap-5">
            {isLoading ? (
              <p className="text-dim-gray">Loading...</p>
            ) : careersRes && careersRes.length > 0 ? (
              careersRes.map((career: Career, index: number) => {
                return (
                  <Accordion
                    key={index}
                    title={career.title}
                    description={career.location}
                    setCareer={setSelectedCareer}
                  >
                    <CareerContent
                      setModalOpen={setIsFormModalOpen}
                      responsibilities={career.responsibilities}
                      requirements={career.requirements}
                    />
                  </Accordion>
                );
              })
            ) : (
              <p className="text-dim-gray">
                No available position
                {category !== "All" ? ` for ${category}` : ""}
              </p>
            )}
            {/* <div className="mb-9 flex justify-center gap-4">
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
            </div> */}
          </div>
        </div>
        <CareersCallHr content={content} />
      </div>
      <CareersModal
        setOpen={setIsFormModalOpen}
        open={isFormModalOpen}
        selectedCareer={selectedCareer as string}
      />
    </div>
  );
};

export default Positions;
