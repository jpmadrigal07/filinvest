"use client";
import ChevronDown from "../svg/ChevronDown";
import { Fragment, ReactNode, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

type T_ValuesObj = {
  [k: string]: string[];
};

type T_MainDropdown = {
  values: T_ValuesObj | string[];
};

const MainDropdown = ({ values }: T_MainDropdown) => {
  const [selected, setSelected] = useState<string>("");
  const renderOptions = (optionsValues: any) => {
    if (!Array.isArray(optionsValues)) {
      let options: ReactNode[] = [];
      Object.keys(optionsValues).forEach((k: string, i) => {
        options.push(
          <>
            <Listbox.Option
              key={i}
              value={k}
              disabled
              className="cursor-default p-4 py-2"
            >
              <span className="text-jet text-md font-bold">{k}</span>
            </Listbox.Option>
            <hr />
            {optionsValues[k].map((value: any, index: number) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `cursor-pointer select-none p-4 py-2 ${
                    active ? "bg-ghost-white text-jet" : "text-dim-gray"
                  }`
                }
                value={value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {value}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
            {Object.keys(optionsValues).length !== i + 1 && <hr />}
          </>
        );
      });
      return options;
    } else {
      return (
        <>
          {optionsValues.map((value: any, index: number) => (
            <Listbox.Option
              key={index}
              className={({ active }) =>
                `cursor-pointer select-none p-4 py-2 ${
                  active ? "bg-ghost-white text-jet" : "text-dim-gray"
                }`
              }
              value={value}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {value}
                  </span>
                </>
              )}
            </Listbox.Option>
          ))}
        </>
      );
    }
  };
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="ring-none border-silver-chalice flex w-full items-center gap-3 border-b-[1px] bg-transparent py-2 text-white">
            <span
              className={`block truncate ${
                selected ? "text-white" : "text-silver-chalice"
              }`}
            >
              {selected ? selected : "Select"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 w-full overflow-auto bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {renderOptions(values)}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default MainDropdown;
