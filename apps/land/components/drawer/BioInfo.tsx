"use client";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Facebook from "../svg/Facebook";
import Twitter from "../svg/Twitter";
import LinkedIn from "../svg/LinkedIn";
import Diamond from "../svg/Diamond";

export default function BioInfo({ sidebarOpen = false, setSidebarOpen }: any) {
  let refDiv = useRef(null);
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40"
            onClose={setSidebarOpen}
            initialFocus={refDiv}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed right-0 left-0 bottom-0 top-32 z-40 flex md:left-44 md:top-80 lg:left-96">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="relative flex w-full flex-1 flex-col bg-white">
                  <div className="flex justify-end px-8 pt-6 lg:px-16">
                    <p
                      className="text-dark-cornflower-blue p-3 text-xl hover:cursor-pointer focus:cursor-pointer"
                      onClick={() => setSidebarOpen(false)}
                    >
                      x
                    </p>
                  </div>
                  <div className="flex h-0 flex-1 flex-col gap-12 overflow-y-auto px-16 pb-16 pt-6 lg:flex-row">
                    <div className="flex flex-col gap-3">
                      <Image
                        src={`/jonathan-gotianun.png`}
                        width={323}
                        height={355}
                        alt="Picture of the author"
                      />
                      <div>
                        <h3 className="text-dark-cornflower-blue text-xl font-bold">
                          Jonathan T. Gotianun
                        </h3>
                        <p className="text-dim-gray">Chairman</p>
                      </div>
                      <div>
                        <p className="text-dim-gray italic">
                          jonasmuthoni@filinvest.com
                        </p>
                        <p className="text-dim-gray italic">
                          +49 (0)30 621 1123 55
                        </p>
                      </div>
                      <div className="mt-4 flex gap-4">
                        <Facebook color="#303030" />
                        <Twitter color="#303030" />
                        <LinkedIn color="#303030" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-6">
                      <p className="text-dark-cornflower-blue text-xl font-bold">
                        Bio
                      </p>
                      <p className="text-dim-gray">
                        Praesent elementum facilisis leo vel fringilla est
                        ullamcorper eget. In hac habitasse platea dictumst
                        quisque sagittis purus sit. Massa tempor nec feugiat
                        nisl. Metus vulputate eu scelerisque felis imperdiet
                        proin fermentum leo vel. Consectetur adipiscing elit
                        duis tristique sollicitudin. Sagittis orci a scelerisque
                        purus semper eget. Nisl nisi scelerisque eu ultrices.
                        Enim sit amet venenatis urna cursus.
                      </p>
                      <p className="text-dim-gray">
                        Egestas sed tempus urna et pharetra pharetra. Et odio
                        pellentesque diam volutpat commodo sed egestas. Arcu non
                        sodales neque sodales. Pellentesque elit ullamcorper
                        dignissim cras tincidunt lobortis feugiat vivamus at.
                      </p>
                      <div>
                        <div className="flex gap-3">
                          <div className="mt-1">
                            <Diamond />
                          </div>
                          <p className="text-dim-gray">
                            Ullamcorper Dignissim Cras.
                          </p>
                        </div>
                        <div className="mt-2 flex gap-3">
                          <div className="mt-1">
                            <Diamond />
                          </div>
                          <p className="text-dim-gray">
                            Sagittis Orci A Scelerisque.
                          </p>
                        </div>
                        <div className="mt-2 flex gap-3">
                          <div className="mt-1">
                            <Diamond />
                          </div>
                          <p className="text-dim-gray">
                            Enim Sit Amet Venenatis Urna Cursus.
                          </p>
                        </div>
                      </div>
                      <p className="text-dark-cornflower-blue text-xl font-bold">
                        Company Info
                      </p>
                      <p className="text-dim-gray pb-12">
                        Consectetur adipiscing elit duis tristique sollicitudin.
                        Sagittis orci a scelerisque purus semper eget. Nisl nisi
                        scelerisque eu ultrices. Enim sit amet venenatis urna
                        cursus.
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}
