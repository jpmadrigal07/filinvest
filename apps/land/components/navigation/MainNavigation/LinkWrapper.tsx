import React, { Dispatch, Fragment } from 'react'
import { Transition, Popover } from '@headlessui/react'
import Link from 'next/link'
import { combineClass } from '../../../helpers/combineClass'
import ChevronDown from '../../svg/ChevronDown'

type T_Flyout_Menu = '' | 'full' | 'single' | 'link';

type T_Single_Lists = {
  title: string,
  subTitle?: string,
  isLink?: boolean,
  link?: string,
}

type T_Props = {
  text: string,
  isLink?: boolean,
  link?: string,
  singleLists?: T_Single_Lists[],
  setCurrentMenuIndex: Dispatch<number>,
  setFlyoutMenu: Dispatch<T_Flyout_Menu>,
  flyoutMenu: string,
  menuIndex: number,
}

const LinkWrapper = ({ text, link, isLink, singleLists, setCurrentMenuIndex, flyoutMenu, setFlyoutMenu, menuIndex }: T_Props) => {
  const setMenuType = (type: T_Flyout_Menu) =>{
    if(flyoutMenu === type) {
      setFlyoutMenu("")
    } else {
      setFlyoutMenu(type)
    }
  }
  return (
    <>
      {isLink && link && !singleLists && (
        <>
          <Link href={link} className="hover:underline cursor-pointer" onClick={() => {
            setMenuType("link");
            setCurrentMenuIndex(menuIndex)
          }}>
            {text}
          </Link>
        </>
      )}
      {!isLink && !link && singleLists && (
        <>
          <Popover className="relative">
            {() => (
              <>
                <Popover.Button
                  className={combineClass(
                    'group text-white inline-flex hover:underline'
                  )}
                  onClick={() => {
                    setMenuType("single");
                    setCurrentMenuIndex(menuIndex)
                  }}
                >
                  <span className="flex gap-2 items-center">
                    Our Businesses
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
                  <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-sm transform px-2 sm:px-0">
                    <div className="overflow-hidden shadow-lg">
                      <div className="relative grid gap-6 bg-[#012B72] px-3 py-3 sm:gap-8">
                        {singleLists.map((item, index) => (
                          <span
                            key={index}
                            className="-m-3 flex items-start transition py-3 duration-150 ease-in-out hover:bg-[#001A47]"
                          >
                            {/* <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" /> */}
                            <div className="ml-4">
                              <p className="text-lg font-medium text-white">{item.title}</p>
                              <p className="mt-1 text-sm text-white opacity-50">{item.subTitle}</p>
                            </div>
                          </span>
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
      {!isLink && !link && !singleLists && (
        <>
          <span className="hover:underline flex gap-2 items-center cursor-pointer" onClick={() => {
            setMenuType("full");
            setCurrentMenuIndex(menuIndex)
          }}>{text}<ChevronDown /></span>
        </>
      )}
    </>
  )
}

export default LinkWrapper