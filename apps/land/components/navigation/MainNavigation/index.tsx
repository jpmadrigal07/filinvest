"use client";
import React, { useState, Fragment, useEffect, useMemo } from "react";
import { combineClass } from "@/helpers/combineClass";
import MainLogo from "@/components/svg/MainLogo";
import LinkWrapper from "./LinkWrapper";
import { Popover, Transition } from "@headlessui/react";
import HamburgerMenu from "@/components/svg/HamburgerMenu";
import Link from "next/link";
import Accordion from "./Accordion";
import { usePathname } from "next/navigation";
import ROUTES from "@/helpers/routes";
import useGetNavigation from "./hooks/useGetNavigation";
import formatNavigations from "./helpers/formatNavigations";
import { menus as staticMenus } from "./menus";

type T_Flyout_Menu = "" | "full" | "single" | "link";

const MainNavigation = ({ className }: { className?: string }) => {
  const { data: navigationRes, isLoading } = useGetNavigation();
  const pathname = usePathname();
  const [flyoutMenu, setFlyoutMenu] = useState<T_Flyout_Menu>("");
  const [currentMenuIndex, setCurrentMenuIndex] = useState<number | null>(null);
  const [scroll] = useState(0);
  const [showFixedNavigation, setShowFixedNavigation] = useState(false);
  const [wasScroll, setWasScroll] = useState(false);
  const [menus, setMenus] = useState(staticMenus);
  const [isHovering, setisHovering] = useState(false);

  useEffect(() => {
    setFlyoutMenu("");
    setCurrentMenuIndex(null);
    setWasScroll(false);
  }, [pathname]);

  useEffect(() => {
    if (navigationRes) {
      setMenus(formatNavigations(navigationRes));
    }
  }, [navigationRes]);

  useEffect(() => {
    if (showFixedNavigation) {
      setWasScroll(true);
    }
  }, [showFixedNavigation]);

  useEffect(() => {
    if (scroll === 0) {
      setWasScroll(false);
      setShowFixedNavigation(false);
    }
  }, [scroll]);

  const accordionRefs = useMemo(() => {
    return (
      menus.map(() => {
        return React.createRef<HTMLButtonElement>();
      }) ?? []
    );
  }, [menus]);

  const renderNavigation = () => {
    return (
      <nav
        className={`${
          showFixedNavigation ? "fixed" : "absolute"
        } top-0 z-[200] w-full ${
          wasScroll && flyoutMenu !== "full"
            ? "bg-royal-dark-blue bg-opacity-95"
            : className
            ? className
            : "bg-transparent bg-opacity-95"
        } max-h-screen`}
      >
        <div className="hiddenNav ">
          <div
            className={combineClass(
              flyoutMenu === "full" ? "bg-royal-dark-blue bg-opacity-95" : "",
              "delay-50 transition"
            )}
            onMouseLeave={() => {
              setFlyoutMenu("");
              setCurrentMenuIndex(null);
            }}
          >
            {/* className="flex flex-wrap items-center gap-1 py-6 px-9 font-bold
            text-white lg:py-10 2xl:gap-14" */}
            <div className="flex items-center gap-1 py-6 px-9 font-bold text-white lg:py-10 2xl:gap-14">
              {/* className="flex-none lg:order-1 lg:flex-grow 2xl:order-none
              2xl:flex-grow-0" */}
              <div className="flex-none lg:flex-grow 2xl:flex-grow-0">
                <Link href="/">
                  <MainLogo />
                </Link>
              </div>
              {/*  className="flex-1 lg:order-3 2xl:order-none" */}
              <div className="flex-1">
                <ul className="my-4 flex list-none items-center justify-center gap-7 text-center 2xl:justify-start">
                  {menus.map((menu, index) => {
                    const wrapperProps = {
                      ...menu,
                      setCurrentMenuIndex: setCurrentMenuIndex,
                      setFlyoutMenu: setFlyoutMenu,
                      flyoutMenu: flyoutMenu,
                      menuIndex: index,
                      currentMenuIndex: currentMenuIndex,
                      isHovering: isHovering,
                      setisHovering: setisHovering,
                    };
                    return (
                      <li key={index}>
                        <LinkWrapper {...wrapperProps} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex-none lg:order-2 2xl:order-none">
                <Link
                  href={navigationRes ? navigationRes.callToActionLink : "/"}
                >
                  <button
                    className="bg-blue focus:bg-dark-cornflower-blue delay-50 disabled:bg-royal-dark-blue disabled:text-wild-blue-yonder py-4 px-9 text-white transition hover:opacity-90"
                    disabled={isLoading}
                  >
                    {navigationRes
                      ? navigationRes.callToActionText
                      : "Loading..."}
                  </button>
                </Link>
              </div>
              {/*  {flyoutMenu === "full" && (
                <button
                  onClick={() => setFlyoutMenu("")}
                  className="cursor-pointer transition hover:opacity-70"
                >
                  X
                </button>
              )} */}
            </div>
            <div
              className={`px-9 pb-10 ${
                flyoutMenu === "full" ? "block" : "hidden"
              }`}
            >
              {menus[currentMenuIndex as number]?.fullComponent}
            </div>
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
        <Popover className="showMini relative z-40">
          {({ open, close }) => (
            <>
              <div
                className={`relative z-50  ${
                  open ? "bg-royal-dark-blue" : "bg-transparent"
                } transition duration-200 ease-out`}
              >
                <div className="flex items-center gap-14 py-5 pl-6 pr-4 md:pl-4 md:pr-4">
                  <div className="flex-1">
                    <Link href={ROUTES.HOME.url}>
                      <MainLogo />
                    </Link>
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
                          <Accordion
                            key={index}
                            accordionRefs={accordionRefs}
                            index={index}
                            title={item.text}
                          >
                            <div className="divide-oxford-blue flex flex-col gap-4 divide-y divide-solid">
                              {item.subMenus.map((subMenu, subMenuIndex) => (
                                <Link
                                  key={subMenuIndex}
                                  href={subMenu.link}
                                  target={item.newTab ? "_blank" : "_self"}
                                  className="pt-4"
                                  onClick={() => close()}
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
                            target={item.newTab ? "_blank" : "_self"}
                            onClick={() => close()}
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

  return (
    <>
      <div
        className={
          !showFixedNavigation && !wasScroll ? "block max-h-screen" : "hidden"
        }
      >
        {renderNavigation()}
      </div>
      <Transition
        show={showFixedNavigation}
        as={Fragment}
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-12"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease duration-300 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        {renderNavigation()}
      </Transition>
    </>
  );
};

export default MainNavigation;
