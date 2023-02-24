import Projects from "@/components/list/Projects";
import Bath from "@/components/svg/Bath";
import Bed from "@/components/svg/Bed";
import Elevator from "@/components/svg/Elevator";
import Facebook from "@/components/svg/Facebook";
import Flag from "@/components/svg/Flag";
import InputPower from "@/components/svg/InputPower";
import Lightning from "@/components/svg/Lightning";
import LinkedIn from "@/components/svg/LinkedIn";
import PersonOutline from "@/components/svg/PersonOutline";
import PhoneHandset from "@/components/svg/PhoneHandset";
import RulerPencil from "@/components/svg/RulerPencil";
import Image from "next/image";
import React from "react";
import { Project } from "shared-types";

const Content = ({ projects }: { projects: Project[] }) => {
  return (
    <section>
      <div className="border-gainsboro border-b-[1px]">
        <div className="my-4 mx-9 flex flex-col gap-9 lg:flex-row xl:mx-16 2xl:mx-44">
          <div className="flex flex-1 items-center gap-4">
            <Image
              src="/activa-logo.png"
              width={128}
              height={25}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">Activa Cubao</h3>
          </div>
          <div className="divide-gainsboro flex flex-1 flex-col items-center md:flex-row md:divide-x">
            <div className="flex items-center gap-6 px-5 py-4">
              <RulerPencil />
              <h3 className="text-jet whitespace-nowrap text-xl">1600 sq ft</h3>
            </div>
            <div className="flex items-center gap-6 px-5 py-4">
              <Bed />
              <h3 className="text-jet whitespace-nowrap text-xl">
                5 Staff Rooms
              </h3>
            </div>
            <div className="flex items-center gap-6 px-5 py-4">
              <Bath />
              <h3 className="text-jet whitespace-nowrap text-xl">
                2 Bathrooms
              </h3>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-start md:justify-start lg:items-center lg:justify-center">
            <button className="bg-blue focus:bg-blue-ryb delay-50 py-5 px-9 text-white transition hover:opacity-90">
              REQUEST A SHOWING
            </button>
          </div>
        </div>
      </div>
      <div className="border-gainsboro border-b-[1px] pt-16 pb-24">
        <div className="mx-9 flex flex-col gap-16 lg:flex-row xl:mx-16 2xl:mx-44">
          <div className="divide-gainsboro flex flex-1 flex-col gap-6 divide-y">
            <div className="flex flex-col gap-12 pb-9 md:flex-row md:items-center md:gap-0">
              <div className="flex flex-1 flex-col gap-3">
                <Flag classes="w-5 h-5" />
                <h3 className="text-jet mt-2 text-2xl font-bold">
                  100 Sen. Gil Puyat Ave.
                </h3>
                <p className="text-jet text-sm">
                  Corner Washington St., Brgy. Pio del Pilar, Makati City.
                </p>
              </div>
              <div className="flex-none">
                <button className="bg-blue focus:bg-blue-ryb delay-50 py-3 px-3 text-white transition hover:opacity-90">
                  For Lease
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-24 py-9 md:flex-row">
              <div className="flex-none">
                <h3 className="text-jet text-xl font-bold">Leasable Area</h3>
              </div>
              <div className="flex flex-1 gap-12">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-52 flex-none">
                      <p className="text-dim-gray whitespace-nowrap text-lg">
                        Floor:
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-jet text-lg">
                        Bare concrete, depressed by 100mm
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-52 flex-none">
                      <p className="text-dim-gray whitespace-nowrap text-lg">
                        Wall:
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-jet text-lg">Plastered finish</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-52 flex-none">
                      <p className="text-dim-gray whitespace-nowrap text-lg">
                        Ceiling:
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-jet text-lg">
                        Exposed concrete soffit, fire sprinkler system, FCU
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-52 flex-none">
                      <p className="text-dim-gray whitespace-nowrap text-lg">
                        Height Clearance:
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-jet text-lg">
                        Exposed concrete soffit, fire sprinkler system, FCU
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-52 flex-none">
                      <p className="text-dim-gray whitespace-nowrap text-lg">
                        VRF:
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-jet text-lg">AC System</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-24 py-9 md:flex-row">
                <div className="flex-none">
                  <h3 className="text-jet text-xl font-bold">Base Building</h3>
                </div>
                <div className="flex flex-1 gap-12">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex-none">
                        <Elevator />
                      </div>
                      <div className="flex-none">
                        <p className="text-jet text-lg">
                          Provided with 4 elevators (1,600 kg. each)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex-none">
                        <PhoneHandset />
                      </div>
                      <div className="flex-none">
                        <p className="text-jet text-lg">
                          Telecommunication provision for three (3) Telco
                          service providers
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex-none">
                        <InputPower />
                      </div>
                      <div className="flex-none">
                        <p className="text-jet text-lg">
                          N+1 redundancy set-up (Three (3) generators 1,000 KVA
                          each)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex-none">
                        <Lightning />
                      </div>
                      <div className="flex-none">
                        <p className="text-jet text-lg">
                          Maximum of 200 VA/sqm for lighting, outlet and small
                          power requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex-none">
                        <PersonOutline />
                      </div>
                      <div className="flex-none">
                        <p className="text-jet text-lg">
                          Density of 5 sqm/person of Net Usable Area
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 py-12">
                <Image
                  src="/single-house.png"
                  width={364}
                  height={364}
                  alt="Picture of the author"
                />
                <Image
                  src="/single-house.png"
                  width={364}
                  height={364}
                  alt="Picture of the author"
                />
                <Image
                  src="/single-house.png"
                  width={364}
                  height={364}
                  alt="Picture of the author"
                />
                <Image
                  src="/single-house.png"
                  width={364}
                  height={364}
                  alt="Picture of the author"
                />
                <Image
                  src="/single-house.png"
                  width={364}
                  height={364}
                  alt="Picture of the author"
                />
                <Image
                  src="/single-house.png"
                  width={364}
                  height={364}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex flex-col gap-24 py-9 md:flex-row">
                <div className="flex-none">
                  <h3 className="text-jet text-xl font-bold">Description</h3>
                </div>
                <div className="flex flex-1 flex-col gap-8">
                  <p className="text-dim-gray text-lg">
                    Velit egestas dui id ornare arcu odio ut sem nulla. Cursus
                    eget nunc scelerisque viverra. Aliquam purus sit amet luctus
                    venenatis lectus magna. Faucibus in ornare quam viverra orci
                    sagittis eu volutpat. Mattis rhoncus urna neque viverra.
                    Vulputate dignissim suspendisse in est. Sed sed risus
                    pretium quam. Arcu cursus euismod quis viverra nibh cras
                    pulvinar mattis. Morbi tristique senectus et netus et.
                  </p>
                  <p className="text-dim-gray text-lg">
                    Urna et pharetra pharetra massa massa. Commodo elit at
                    imperdiet dui accumsan sit amet. Laoreet suspendisse
                    interdum consectetur libero id faucibus nisl tincidunt.
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Purus sit amet luctus venenatis lectus magna fringilla.
                    Pharetra convallis posuere morbi leo urna molestie at
                    elementum eu. Arcu cursus euismod quis viverra nibh cras.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-24 pt-9 md:flex-row">
              <div className="flex-none">
                <h3 className="text-jet text-xl font-bold">Location</h3>
              </div>
              <div className="flex flex-1 flex-col gap-8">
                <p className="text-jet text-sm">
                  100 Sen. Gil Puyat Ave. Corner Washington St., Brgy. Pio del
                  Pilar, Makati City.
                </p>
                <Image
                  src="/map-single-property.png"
                  width={599}
                  height={340}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex-none lg:w-1/3 2xl:w-1/3">
            <div className="bg-white px-9 pt-9 pb-16 shadow-xl">
              <div className="flex items-center gap-6">
                <Image
                  src="/constructionshared.png"
                  width={74}
                  height={74}
                  alt="Picture of the author"
                />
                <div>
                  <h3 className="text-jet text-2xl font-bold">Emily Lorena</h3>
                  <p className="text-jet font-bold">Manager</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-6">
                <p>Phone:</p>
                <p className="text-blue-ryb text-xl font-bold">
                  +63 912 2345 1122
                </p>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <p>Email:</p>
                <p className="break-words text-xl font-bold">
                  lorenaemily@filinvest.com
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-xl font-bold">Connect with us:</p>
                <div className="flex gap-4">
                  <Facebook color="#DBDBDB" />
                  <LinkedIn color="#DBDBDB" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-9 py-24 xl:mx-16 2xl:mx-44">
        <h3 className="text-jet text-center text-4xl font-bold">
          Other Offices
        </h3>
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Content;
