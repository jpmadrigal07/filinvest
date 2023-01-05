import React, { Fragment } from "react";
import { Transition, Popover } from "@headlessui/react";
import { combineClass } from "@/helpers/combineClass";
import ChevronDown from "../svg/ChevronDown";

const SelectCategory = () => {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button
            className={combineClass("group inline-flex hover:underline")}
          >
            <div className="divide-gainsboro flex w-52 items-center divide-x bg-white shadow-xl">
              <div className="flex-1 py-3 px-6">Category - All</div>
              <div className="flex flex-none flex-col gap-1 p-4">
                <ChevronDown color="#303030" classes="rotate-180" />
                <ChevronDown color="#303030" />
              </div>
            </div>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 mt-3">
              <div className="w-52 overflow-hidden shadow-lg">
                <div className="gap-6 bg-white sm:gap-8">
                  <span
                    onClick={() => close()}
                    className="hover:bg-ghost-white flex items-start transition duration-150 ease-in-out hover:cursor-pointer"
                  >
                    <div className="w-full py-4 px-5">
                      <p className="text-md text-jet whitespace-nowrap text-left font-medium">
                        Co-Living
                      </p>
                    </div>
                  </span>
                  <span
                    onClick={() => close()}
                    className="hover:bg-ghost-white flex items-start transition duration-150 ease-in-out hover:cursor-pointer"
                  >
                    <div className="w-full py-4 px-5">
                      <p className="text-md text-jet whitespace-nowrap text-left font-medium">
                        Offices
                      </p>
                    </div>
                  </span>
                  <span
                    onClick={() => close()}
                    className="hover:bg-ghost-white flex items-start transition duration-150 ease-in-out hover:cursor-pointer"
                  >
                    <div className="w-full py-4 px-5">
                      <p className="text-md text-jet whitespace-nowrap text-left font-medium">
                        Projects
                      </p>
                    </div>
                  </span>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default SelectCategory;
