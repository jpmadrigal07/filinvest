import Facebook from "@/components/svg/Facebook";
import Flag from "@/components/svg/Flag";
import LinkedIn from "@/components/svg/LinkedIn";
import Search from "@/components/svg/Search";
import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section>
      <div className="border-gainsboro border-b-[1px]">
        <div className="my-4 flex gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="flex flex-1 items-center gap-4">
            <Image
              src="/activa-logo.png"
              width={128}
              height={25}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">Activa Cubao</h3>
          </div>
          <div className="divide-gainsboro flex flex-1 items-center divide-x">
            <div className="flex items-center gap-6 px-5 py-4">
              <Facebook color="#303030" />
              <h3 className="text-jet whitespace-nowrap text-xl">1600 sq ft</h3>
            </div>
            <div className="flex items-center gap-6 px-5 py-4">
              <Facebook color="#303030" />
              <h3 className="text-jet whitespace-nowrap text-xl">
                5 Staff Rooms
              </h3>
            </div>
            <div className="flex items-center gap-6 px-5 py-4">
              <Facebook color="#303030" />
              <h3 className="text-jet whitespace-nowrap text-xl">
                2 Bathrooms
              </h3>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <button className="bg-blue focus:bg-blue-ryb delay-50 py-5 px-9 text-white transition hover:opacity-90">
              REQUEST A SHOWING
            </button>
          </div>
        </div>
      </div>
      <div className="border-gainsboro border-b-[1px] pt-16 pb-24">
        <div className="flex gap-16 lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="divide-gainsboro flex flex-1 flex-col gap-6 divide-y">
            <div className="flex items-center pb-9">
              <div className="flex flex-1 flex-col gap-3">
                <Search />
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
            <div className="flex gap-24 py-9">
              <div className="flex-none">
                <h3 className="text-jet text-xl font-bold">Leasable Area</h3>
              </div>
              <div className="flex flex-1 gap-12">
                <div className="flex flex-col gap-4">
                  <div className="flex">
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
                  <div className="flex">
                    <div className="w-52 flex-none">
                      <p className="text-dim-gray whitespace-nowrap text-lg">
                        Wall:
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-jet text-lg">Plastered finish</p>
                    </div>
                  </div>
                  <div className="flex">
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
                  <div className="flex">
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
                  <div className="flex">
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
              <div className="flex gap-24 py-9">
                <div className="flex-none">
                  <h3 className="text-jet text-xl font-bold">Leasable Area</h3>
                </div>
                <div className="flex flex-1 gap-12">
                  <div className="flex flex-col gap-4">
                    <div className="flex">
                      <div className="w-52 flex-none">
                        <p className="text-dim-gray whitespace-nowrap text-lg">
                          Floor:
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="text-jet text-lg">
                          Provided with 4 elevators (1,600 kg. each)
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-52 flex-none">
                        <p className="text-dim-gray whitespace-nowrap text-lg">
                          Wall:
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="text-jet text-lg">
                          Telecommunication provision for three (3) Telco
                          service providers
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-52 flex-none">
                        <p className="text-dim-gray whitespace-nowrap text-lg">
                          Ceiling:
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="text-jet text-lg">
                          N+1 redundancy set-up (Three (3) generators 1,000 KVA
                          each)
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-52 flex-none">
                        <p className="text-dim-gray whitespace-nowrap text-lg">
                          Height Clearance:
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="text-jet text-lg">
                          Maximum of 200 VA/sqm for lighting, outlet and small
                          power requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-52 flex-none">
                        <p className="text-dim-gray whitespace-nowrap text-lg">
                          VRF:
                        </p>
                      </div>
                      <div className="flex-1">
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
              <div className="flex gap-24 py-9">
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
            <div className="flex gap-24 pt-9">
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
          <div className="w-1/3 flex-none 2xl:w-1/4">
            <div className="bg-white px-9 pt-9 pb-12 shadow-xl">
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
              <div className="flex items-center gap-6">
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
      <div className="py-24 lg:mx-9 xl:mx-16 2xl:mx-44">
        <h3 className="text-jet text-center text-4xl font-bold">
          Other Offices
        </h3>
        <div className="mt-12 grid grid-cols-3 gap-12">
          <div className="flex flex-1 flex-col gap-4">
            <Image
              src="/100-west-cyberzone.png"
              width={507}
              height={407}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">100 West Cyberzone</h3>
            <div className="flex gap-4">
              <button
                type="button"
                className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#303030" classes="w-5 h-5" />
                </div>
                <p className="text-md text-jet">Offices</p>
              </button>
              <button
                type="button"
                className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#ffffff" classes="w-5 h-5" />
                </div>
                <p className="text-md text-white">Makati</p>
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <Image
              src="/100-west-cyberzone.png"
              width={507}
              height={407}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">100 West Cyberzone</h3>
            <div className="flex gap-4">
              <button
                type="button"
                className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#303030" classes="w-5 h-5" />
                </div>
                <p className="text-md text-jet">Offices</p>
              </button>
              <button
                type="button"
                className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#ffffff" classes="w-5 h-5" />
                </div>
                <p className="text-md text-white">Makati</p>
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <Image
              src="/100-west-cyberzone.png"
              width={507}
              height={407}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">100 West Cyberzone</h3>
            <div className="flex gap-4">
              <button
                type="button"
                className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#303030" classes="w-5 h-5" />
                </div>
                <p className="text-md text-jet">Offices</p>
              </button>
              <button
                type="button"
                className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#ffffff" classes="w-5 h-5" />
                </div>
                <p className="text-md text-white">Makati</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
