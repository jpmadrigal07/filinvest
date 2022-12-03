"use client";
import React, { useState, Fragment, useEffect } from "react";
import { combineClass } from "@/helpers/combineClass";
import MainLogo from "@/components/svg/MainLogo";
import LinkWrapper from "./LinkWrapper";
import { Popover, Transition } from "@headlessui/react";
import HamburgerMenu from "@/components/svg/HamburgerMenu";
import Link from "next/link";
import Accordion from "./Accordion";
import { menus } from "./menus";
import { usePathname } from "next/navigation";
import ROUTES from "@/helpers/routes";

type T_Flyout_Menu = "" | "full" | "single" | "link";

const MainNavigation = () => {
  const pathname = usePathname();
  const [flyoutMenu, setFlyoutMenu] = useState<T_Flyout_Menu>("");
  const [currentMenuIndex, setCurrentMenuIndex] = useState<number | null>(null);

  useEffect(() => {
    setFlyoutMenu("");
    setCurrentMenuIndex(null);
  }, [pathname]);

  return (
    <nav className="absolute z-50 w-full">
      <div className="hidden lg:block">
        <div
          className={combineClass(
            flyoutMenu === "full" ? "bg-royal-dark-blue bg-opacity-95" : "",
            "delay-50 transition"
          )}
        >
          <div className="flex items-center gap-14 px-9 py-10 font-bold text-white">
            <div className="flex-none">
              <Link href={ROUTES.HOME.url}>
                <MainLogo />
              </Link>
            </div>
            <div className="flex-1">
              <ul className="flex list-none items-center gap-7 text-center">
                {menus.map((menu, index) => {
                  const wrapperProps = {
                    ...menu,
                    setCurrentMenuIndex: setCurrentMenuIndex,
                    currentMenuIndex: currentMenuIndex,
                    setFlyoutMenu: setFlyoutMenu,
                    flyoutMenu: flyoutMenu,
                    menuIndex: index,
                  };
                  return (
                    <li key={index}>
                      <LinkWrapper {...wrapperProps} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex-none">
              <button className="bg-blue focus:bg-dark-cornflower-blue delay-50 py-4 px-9 text-white transition hover:opacity-90">
                Reserve Now
              </button>
            </div>
          </div>
          <Transition appear show={flyoutMenu === "full"} as={Fragment}>
            <div className="px-9 pb-10">
              {menus[currentMenuIndex as number]?.fullComponent}
            </div>
          </Transition>
        </div>
        {flyoutMenu === "full" && (
          <div
            onClick={() => {
              setFlyoutMenu("");
              setCurrentMenuIndex(null);
            }}
            className="h-screen w-full bg-transparent"
          ></div>
        )}
      </div>
      <Popover className="relative z-40 lg:hidden">
        {({ open }) => (
          <>
            <div
              className={`relative z-50  ${
                open ? "bg-royal-dark-blue" : "bg-transparent"
              } transition duration-200 ease-out`}
            >
              <div className="flex items-center gap-14 py-5 pl-6 pr-4 md:pl-4 md:pr-4">
                <div className="flex-1">
                  <MainLogo />
                </div>
                <Popover.Button className="focus:bg-oxford-blue delay-50 focus:ring-none flex-none p-3 transition focus:outline-none">
                  <HamburgerMenu />
                </Popover.Button>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 z-50 transform shadow-lg">
                <div className="bg-royal-dark-blue">
                  {menus.map((item, index) => {
                    if (item.subMenus) {
                      return (
                        <Accordion key={index} title={item.text}>
                          <div className="divide-oxford-blue flex flex-col gap-4 divide-y divide-solid">
                            {item.subMenus.map((subMenu, subMenuIndex) => (
                              <Link
                                key={subMenuIndex}
                                href={subMenu.link}
                                className="pt-4"
                              >
                                <div className="mb-2 text-lg text-white">
                                  {subMenu.title}
                                </div>
                                <div className="text-sm text-white opacity-50">
                                  {subMenu.subTitle}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </Accordion>
                      );
                    } else {
                      return (
                        <Link
                          key={index}
                          href={item.link}
                          className="hover:bg-oxford-blue focus:bg-oxford-blue flex w-full py-4 px-4 text-lg font-medium text-white"
                        >
                          {item.text}
                        </Link>
                      );
                    }
                  })}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </nav>
  );
};

export default MainNavigation;
