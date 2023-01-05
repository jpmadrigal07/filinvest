import React, { Dispatch, Fragment, ReactNode } from "react";
import { Transition, Popover } from "@headlessui/react";
import Link from "next/link";
import { combineClass } from "@/helpers/combineClass";
import ChevronDown from "@/components/svg/ChevronDown";

type T_Flyout_Menu = "" | "full" | "single" | "link";

type T_Sub_Menus = {
  title: string;
  subTitle?: string;
  link: string;
};

interface I_Props {
  text: string;
  isLink?: boolean;
  link?: string;
  subMenus?: T_Sub_Menus[];
  currentMenuIndex?: number | null;
  setCurrentMenuIndex: Dispatch<number | null>;
  setFlyoutMenu: Dispatch<T_Flyout_Menu>;
  menuIndex: number;
  fullComponent?: ReactNode;
}

const LinkWrapper = ({
  text,
  link,
  isLink,
  subMenus,
  setCurrentMenuIndex,
  currentMenuIndex,
  setFlyoutMenu,
  menuIndex,
  fullComponent,
}: I_Props) => {
  const setMenuType = (type: T_Flyout_Menu) => {
    setFlyoutMenu(type);
  };
  return (
    <>
      {isLink && link && !subMenus && (
        <>
          <Link
            href={link}
            className="cursor-pointer hover:underline"
            onClick={() => {
              setMenuType("link");
              setCurrentMenuIndex(menuIndex);
            }}
          >
            {text}
          </Link>
        </>
      )}
      {!isLink && !link && !fullComponent && subMenus && (
        <>
          <Popover className="relative">
            {({ close }) => (
              <>
                <Popover.Button
                  className={combineClass(
                    "group inline-flex text-white hover:underline"
                  )}
                  onClick={() => {
                    setMenuType("single");
                    setCurrentMenuIndex(menuIndex);
                  }}
                >
                  <span className="flex items-center gap-2">
                    {text}
                    <ChevronDown />
                  </span>
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
                    <div className="overflow-hidden shadow-lg">
                      <div className="bg-royal-dark-blue gap-6 sm:gap-8">
                        {subMenus.map((item, index) => (
                          <Link
                            href={item.link}
                            key={index}
                            onClick={() => close()}
                            className="hover:bg-oxford-blue flex items-start transition duration-150 ease-in-out"
                          >
                            {/* <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" /> */}
                            <div className="w-[290px] p-4">
                              <p className="whitespace-nowrap text-left text-lg font-medium text-white">
                                {item.title}
                              </p>
                              <p className="mt-1 text-left text-sm text-white opacity-50">
                                {item.subTitle}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </>
      )}
      {!isLink && !link && fullComponent && (
        <>
          <span
            className="flex cursor-pointer items-center gap-2 hover:underline"
            onClick={() => {
              if (menuIndex === currentMenuIndex) {
                setMenuType("");
                setCurrentMenuIndex(null);
              } else {
                setMenuType("full");
                setCurrentMenuIndex(menuIndex);
              }
            }}
          >
            {text}
            <ChevronDown />
          </span>
        </>
      )}
    </>
  );
};

export default LinkWrapper;
