"use client"
import React, { useState, Fragment, useEffect } from "react";
import { combineClass } from "../../../helpers/combineClass";
import MainLogo from "../../svg/MainLogo";
import LinkWrapper from "./LinkWrapper";
import { Popover, Transition } from '@headlessui/react'
import HamburgerMenu from "../../svg/HamburgerMenu";
import Link from "next/link";
import Accordion from "./Accordion";
import AboutUs from "../menu/AboutUs";
import OurBusinesses from "../menu/OurBusinesses";
import Residences from "../menu/Residences";
import InvestorRelations from "../menu/InvestorRelations";

type T_Flyout_Menu = "" | "full" | "single" | "link";

const MainNavigation = () => {
  const [flyoutMenu, setFlyoutMenu] = useState<T_Flyout_Menu>("");
  const [currentMenuIndex, setCurrentMenuIndex] = useState<number | null>(null);

  const menus = [
    {
      text: "About Us",
      fullComponent: <AboutUs/>,
    },
    {
      text: "Our Businesses",
      fullComponent: <OurBusinesses/>,
    },
    {
      text: "Residences",
      fullComponent: <Residences/>,
    },
    {
      text: "Sellers",
      subMenus: [
        {
          title: "Seller's Hub",
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: "/seller-hub"
        },
        {
          title: "Seller Accreditation Tool",
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: "/seller-accreditation-tool"
        },
      ],
    },
    {
      text: "Buyers",
      subMenus: [
        {
          title: "Calculator",
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: "/calculator"
        },
        {
          title: "Online Appointment",
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: "/online-appointment"
        },
        {
          title: "FilPay",
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: "/filpay"
        },
        {
          title: "MyHome",
          subTitle: "Lorem ipsum volpar makeri totga ginuis",
          link: "/my-home"
        },
      ],
    },
    {
      text: "News",
      isLink: true,
      link: "/news",
    },
    {
      text: "#PusongFilinvest",
      isLink: true,
      link: "/pusong-filinvest",
    },
    {
      text: "Investor Relations",
      fullComponent: <InvestorRelations/>,
    },
  ];

  return (
    <nav className="absolute w-full z-10">
      <div className="hidden lg:block">
        <div
          className={combineClass(
            flyoutMenu === "full" ? "bg-royal-dark-blue bg-opacity-95" : "",
            "delay-50 transition"
          )}
        >
          <div className="flex items-center gap-14 px-9 py-10 font-bold text-white">
            <div className="flex-none">
              <MainLogo />
            </div>
            <div className="flex-1">
              <ul className="flex gap-7">
                {menus.map((menu, index) => {
                  const wrapperProps = {
                    ...menu,
                    setCurrentMenuIndex: setCurrentMenuIndex,
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
              <button className="bg-blue py-4 px-9 text-white hover:opacity-90 focus:bg-dark-cornflower-blue delay-50 transition">
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
            onClick={() => setFlyoutMenu("")}
            className="h-screen w-full bg-transparent"
          ></div>
        )}
      </div>
      <Popover className="lg:hidden relative z-0">
        {({ open }) => (
          <>
            <div className={`relative z-10  ${open ? "bg-royal-dark-blue" : "bg-transparent"} duration-200 ease-out transition`}>
              <div className="flex items-center gap-14 px-4 py-5">
                <div className="flex-1">
                  <MainLogo />
                </div>
                <Popover.Button className="flex-none p-3 focus:bg-oxford-blue delay-50 transition focus:outline-none focus:ring-none">
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
              <Popover.Panel className="absolute inset-x-0 z-10 transform shadow-lg">
                <div className="bg-royal-dark-blue">
                  { menus.map((item, index) => {
                    if(item.fullComponent) {
                      return (
                        <Accordion key={index} title={item.text}>
                          <div className="px-9 pb-10">
                            {menus[index]?.fullComponent}
                          </div>
                        </Accordion>
                      )
                    } else if(!item.fullComponent && item.subMenus) {
                      return (
                        <Accordion key={index} title={item.text}>
                          <div className="flex flex-col gap-4 divide-y divide-solid divide-oxford-blue">
                            {item.subMenus.map((subMenu, subMenuIndex) => (
                              <Link key={subMenuIndex} href={subMenu.link} className="pt-4"><div className="mb-2 text-lg text-white">{subMenu.title}</div><div className="text-sm text-white opacity-50">{subMenu.subTitle}</div></Link>
                            ))}
                          </div>
                        </Accordion>
                      )
                    } else {
                      return <Link key={index} href={item.link} className="flex w-full py-4 px-4 text-lg font-medium text-white hover:bg-oxford-blue focus:bg-oxford-blue">{item.text}</Link>
                    }
                  }) }
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
