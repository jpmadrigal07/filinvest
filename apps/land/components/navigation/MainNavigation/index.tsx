import React, { useState, Fragment } from 'react'
import { combineClass } from '../../../helpers/combineClass';
import { Transition } from '@headlessui/react'
import MainLogo from '../../svg/MainLogo';
import LinkWrapper from './LinkWrapper';

type T_Flyout_Menu = '' | 'full' | 'single' | 'link';

const MainNavigation = () => {
    const [flyoutMenu, setFlyoutMenu] = useState<T_Flyout_Menu>("");
    const [currentMenuIndex, setCurrentMenuIndex] = useState<number | null>(null);

    const menus = [
        {
            text: "About Us",
            fullComponent: <h1>Volcano</h1>
        },
        {
            text: "Our Businesses",
            fullComponent: <h1>Mountain</h1>
        },
        {
            text: "Residences",
            fullComponent: <h1>Shore</h1>
        },
        {
            text: "Sellers",
            singleLists: [
                {
                    title: "Seller's Hub",
                    subTitle: "Lorem ipsum volpar makeri totga ginuis",
                },
                {
                    title: "Seller Accreditation Tool",
                    subTitle: "Lorem ipsum volpar makeri totga ginuis",
                }
            ]
        },
        {
            text: "Buyers",
            singleLists: [
                {
                    title: "Calculator",
                    subTitle: "Lorem ipsum volpar makeri totga ginuis",
                },
                {
                    title: "Online Appointment",
                    subTitle: "Lorem ipsum volpar makeri totga ginuis",
                },
                {
                    title: "FilPay",
                    subTitle: "Lorem ipsum volpar makeri totga ginuis",
                },
                {
                    title: "MyHome",
                    subTitle: "Lorem ipsum volpar makeri totga ginuis",
                }
            ]
        },
        {
            text: "News",
            isLink: true,
            link: "https://zkript.dev"
        },
    ]

    return (
        <>
            <div className={combineClass(
                flyoutMenu === "full" ? "bg-[#012B72]" : "",
                "transition delay-50"
            )}>
                <div className="flex items-center gap-14 px-9 py-10 text-white font-bold">
                    <div className="flex-none">
                        <MainLogo/>
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
                                }
                                return (
                                    <li>
                                        <LinkWrapper {...wrapperProps} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex-none">
                        <button className="bg-[#0030EF] hover:opacity-90 focus:bg-[#163E82] text-white py-4 px-9">Reserve Now</button>
                    </div>
                </div>
                <Transition appear show={flyoutMenu === "full"} as={Fragment}>
                    <div className="px-9 pb-10">
                        {menus[currentMenuIndex as number]?.fullComponent}
                    </div>
                </Transition>
            </div>
            {flyoutMenu === "full" && <div onClick={() => setFlyoutMenu("")} className="w-full h-full bg-transparent"></div>}
        </>
    )
}

export default MainNavigation