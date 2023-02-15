import React, { ReactNode } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import ChevronDown from "@/components/svg/ChevronDown";

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`hover:bg-oxford-blue flex w-full items-center justify-between py-4 px-4 text-left text-lg font-medium text-white focus:outline-none ${
              open ? "bg-oxford-blue" : ""
            }`}
          >
            <span>{title}</span>
            <ChevronDown classes="w-[10px] h-[10px]" />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 pb-4 text-sm text-white">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
