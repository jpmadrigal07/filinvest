"use client";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import React, { useState } from "react";
import Image from "next/image";
import Facebook from "@/components/svg/Facebook";
import Twitter from "@/components/svg/Twitter";
import LinkedIn from "@/components/svg/LinkedIn";
import BioInfo from "@/components/drawer/BioInfo";

const Content = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <section className="short:-mt-24 mx-9 -mt-16 mb-28 flex flex-col gap-9 xl:mx-16 2xl:mx-44 2xl:-mt-52">
      <div className="py-32 lg:bg-white lg:py-32 lg:px-32">
        <h2 className="text-jet text-5xl font-bold">Board of Directors</h2>
        <p className="text-dim-gray mt-6">
          Urna et pharetra pharetra massa massa. Commodo elit at imperdiet dui
          accumsan sit amet. Laoreet suspendisse interdum consectetur libero id
          faucibus nisl tincidunt. Laoreet sit amet cursus sit amet dictum sit
          amet justo. Purus sit amet luctus venenatis lectus magna fringilla.
          Pharetra convallis posuere morbi leo urna molestie at elementum eu.
          Arcu cursus euismod quis viverra nibh cras. Elit pellentesque habitant
          morbi tristique senectus et netus et malesuada. Ac tortor vitae purus
          faucibus ornare suspendisse sed nisi. Libero id faucibus nisl
          tincidunt eget nullam.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative">
            <Image
              src={`/jonathan-gotianun.png`}
              width={736}
              height={848}
              alt="Picture of the author"
            />
            <div className="absolute -bottom-6 z-20 w-full">
              <div className="flex h-full justify-center">
                <button type="button" onClick={() => setSidebarOpen(true)}>
                  {" "}
                  <Image
                    src={`/button-person.png`}
                    width={47}
                    height={47}
                    alt="Picture of the author"
                    className="hover:cursor-pointer"
                  />
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-t from-black group-hover:hidden">
              <div className="flex h-full flex-col items-center justify-center px-6">
                <h3 className="text-center text-xl font-bold text-white">
                  Jonathan T. Gotianun
                </h3>
                <h4 className="text-center text-white">Chairman</h4>
              </div>
            </div>
            <div className="absolute bottom-0 z-10 hidden h-1/2 w-full group-hover:block">
              <div className="flex h-full justify-center gap-6">
                <Facebook />
                <Twitter />
                <LinkedIn />
              </div>
            </div>
          </div>
          <div className="group relative">
            <Image
              src={`/lourdes-gotianun.png`}
              width={736}
              height={848}
              alt="Picture of the author"
            />
            <div className="absolute -bottom-6 z-20 w-full">
              <div className="flex h-full justify-center">
                <Image
                  src={`/button-person.png`}
                  width={47}
                  height={47}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-t from-black group-hover:hidden">
              <div className="flex h-full flex-col items-center justify-center px-6">
                <h3 className="text-center text-xl font-bold text-white">
                  Lourdes T. Gotianun-Yap
                </h3>
                <h4 className="text-center text-white">
                  President, Chief Executive Officer & Director
                </h4>
              </div>
            </div>
            <div className="absolute bottom-0 z-10 hidden h-1/2 w-full group-hover:block">
              <div className="flex h-full justify-center gap-6">
                <Facebook />
                <Twitter />
                <LinkedIn />
              </div>
            </div>
          </div>
          <div className="group relative">
            <Image
              src={`/reynaldo-nieva.png`}
              width={736}
              height={848}
              alt="Picture of the author"
            />
            <div className="absolute -bottom-6 z-20 w-full">
              <div className="flex h-full justify-center">
                <Image
                  src={`/button-person.png`}
                  width={47}
                  height={47}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-t from-black group-hover:hidden">
              <div className="flex h-full flex-col items-center justify-center px-6">
                <h3 className="text-center text-xl font-bold text-white">
                  Reynaldo Juanito S. Nieva
                </h3>
                <h4 className="text-center text-white">
                  First Vice President-Operations
                </h4>
              </div>
            </div>
            <div className="absolute bottom-0 z-10 hidden h-1/2 w-full group-hover:block">
              <div className="flex h-full justify-center gap-6">
                <Facebook />
                <Twitter />
                <LinkedIn />
              </div>
            </div>
          </div>
          <div className="group relative">
            <Image
              src={`/lourdes-gotianun.png`}
              width={736}
              height={848}
              alt="Picture of the author"
            />
            <div className="absolute -bottom-6 z-20 w-full">
              <div className="flex h-full justify-center">
                <Image
                  src={`/button-person.png`}
                  width={47}
                  height={47}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-t from-black group-hover:hidden">
              <div className="flex h-full flex-col items-center justify-center px-6">
                <h3 className="text-center text-xl font-bold text-white">
                  Ana Venus A. Mejia
                </h3>
                <h4 className="text-center text-white">
                  Chief Financial Officer & Treasurer
                </h4>
              </div>
            </div>
            <div className="absolute bottom-0 z-10 hidden h-1/2 w-full group-hover:block">
              <div className="flex h-full justify-center gap-6">
                <Facebook />
                <Twitter />
                <LinkedIn />
              </div>
            </div>
          </div>
          <div className="group relative">
            <Image
              src={`/tristaneil-lasmarias.png`}
              width={736}
              height={848}
              alt="Picture of the author"
            />
            <div className="absolute -bottom-6 z-20 w-full">
              <div className="flex h-full justify-center">
                <Image
                  src={`/button-person.png`}
                  width={47}
                  height={47}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-t from-black group-hover:hidden">
              <div className="flex h-full flex-col items-center justify-center px-6">
                <h3 className="text-center text-xl font-bold text-white">
                  Tristaneil D. Las Marias
                </h3>
                <h4 className="text-center text-white">
                  Chief Strategy Officer & Executive Vice President
                </h4>
              </div>
            </div>
            <div className="absolute bottom-0 z-10 hidden h-1/2 w-full group-hover:block">
              <div className="flex h-full justify-center gap-6">
                <Facebook />
                <Twitter />
                <LinkedIn />
              </div>
            </div>
          </div>
          <div className="group relative">
            <Image
              src={`/francis-ceballos.png`}
              width={736}
              height={848}
              alt="Picture of the author"
            />
            <div className="absolute -bottom-6 z-20 w-full">
              <div className="flex h-full justify-center">
                <Image
                  src={`/button-person.png`}
                  width={47}
                  height={47}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-t from-black group-hover:hidden">
              <div className="flex h-full flex-col items-center justify-center px-6">
                <h3 className="text-center text-xl font-bold text-white">
                  Francis V. Ceballos
                </h3>
                <h4 className="text-center text-white">
                  Senior Vice President & Business Group Head
                </h4>
              </div>
            </div>
            <div className="absolute bottom-0 z-10 hidden h-1/2 w-full group-hover:block">
              <div className="flex h-full justify-center gap-6">
                <Facebook />
                <Twitter />
                <LinkedIn />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 hidden md:flex">
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Structures"
            isLeft={true}
          />
        </div>
        <div className="grow"></div>
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Investor Relations Program"
            isLeft={false}
          />
        </div>
      </div>
      <BioInfo setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
    </section>
  );
};

export default Content;
