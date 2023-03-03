import MainHeader from "@/components/header/MainHeader";
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
import Link from "next/link";
import React from "react";
import { Project } from "shared-types";

const Content = ({ project }: { project: Project }) => {
  return (
    <section>
      <MainHeader
        otherUrl={`${process.env.CMS_URL}${encodeURI(
          // @ts-expect-error
          project.headerImage.url
        )}`}
      />
      <div className="border-gainsboro border-b-[1px]">
        <div className="my-4 mx-9 flex flex-col gap-9 lg:flex-row xl:mx-16 2xl:mx-44">
          <div className="flex flex-1 items-center gap-4">
            <Image
              src={project.logo.url ? project.logo.url : ""}
              width={128}
              height={25}
              alt={project.logo.alt}
            />
            <h3 className="text-jet text-2xl font-bold">{project.title}</h3>
          </div>
          <div className="divide-gainsboro flex flex-1 flex-col items-center md:flex-row md:divide-x">
            <div className="flex items-center gap-6 px-5 py-4">
              <RulerPencil />
              <h3 className="text-jet whitespace-nowrap text-xl">
                {project.size} sq ft
              </h3>
            </div>
            <div className="flex items-center gap-6 px-5 py-4">
              <Bed />
              <h3 className="text-jet whitespace-nowrap text-xl">
                {project.numberOfStaffRoom} Staff Rooms
              </h3>
            </div>
            <div className="flex items-center gap-6 px-5 py-4">
              <Bath />
              <h3 className="text-jet whitespace-nowrap text-xl">
                {project.numberOfBathrooms} Bathrooms
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
                  {project.address1}
                </h3>
                <p className="text-jet text-sm">{project.address2}</p>
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
                      <p className="text-jet text-lg">{project.floor}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-52 flex-none">
                      <p className="text-dim-gray whitespace-nowrap text-lg">
                        Wall:
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-jet text-lg">{project.wall}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-52 flex-none">
                      <p className="text-dim-gray whitespace-nowrap text-lg">
                        Ceiling:
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-jet text-lg">{project.ceiling}</p>
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
                        {project.heightClearance}
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
                      <p className="text-jet text-lg">{project.VRF}</p>
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
                        <p className="text-jet text-lg">{project.elevator}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex-none">
                        <PhoneHandset />
                      </div>
                      <div className="flex-none">
                        <p className="text-jet text-lg">{project.telephone}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex-none">
                        <InputPower />
                      </div>
                      <div className="flex-none">
                        <p className="text-jet text-lg">{project.powerInput}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex-none">
                        <Lightning />
                      </div>
                      <div className="flex-none">
                        <p className="text-jet text-lg">
                          {project.powerOutput}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex-none">
                        <PersonOutline />
                      </div>
                      <div className="flex-none">
                        <p className="text-jet text-lg">{project.people}</p>
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
                  <p className="text-dim-gray text-lg">{project.description}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-24 pt-9 md:flex-row">
              <div className="flex-none">
                <h3 className="text-jet text-xl font-bold">Location</h3>
              </div>
              <div className="flex flex-1 flex-col gap-8">
                <p className="text-jet text-sm">
                  {project.address1} {project.address2}
                </p>
                <Image
                  src={project.mapImage.url ? project.mapImage.url : ""}
                  width={599}
                  height={340}
                  alt={project.mapImage.alt}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex-none lg:w-1/3 2xl:w-1/3">
            <div className="bg-white px-9 pt-9 pb-16 shadow-xl">
              <div className="flex items-center gap-6">
                <Image
                  src={project.managerPhoto.url ? project.managerPhoto.url : ""}
                  width={74}
                  height={74}
                  alt={project.managerPhoto.alt}
                />
                <div>
                  <h3 className="text-jet text-2xl font-bold">
                    {project.managerName}
                  </h3>
                  <p className="text-jet font-bold">Manager</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-6">
                <p>Phone:</p>
                <p className="text-blue-ryb text-xl font-bold">
                  {project.managerPhone}
                </p>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <p>Email:</p>
                <p className="break-words text-xl font-bold">
                  {project.managerEmail}
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-xl font-bold">Connect with us:</p>
                <div className="flex gap-4">
                  <Link href={project.managerFacebookLink}>
                    <Facebook color="#DBDBDB" />
                  </Link>
                  <Link href={project.managerLinkedinLink}>
                    <LinkedIn color="#DBDBDB" />
                  </Link>
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
        <Projects
          projects={[
            project.relatedOffice1,
            project.relatedOffice2,
            project.relatedOffice3,
          ]}
        />
      </div>
    </section>
  );
};

export default Content;
