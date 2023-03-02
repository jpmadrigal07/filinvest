"use client";
import Link from "next/link";
import React from "react";
import { WEB_TITLE } from "@/helpers/constants";
import ROUTES from "@/helpers/routes";
import Facebook from "@/components/svg/Facebook";
import LinkedIn from "@/components/svg/LinkedIn";
import Mail from "@/components/svg/Mail";
import MainLogo from "@/components/svg/MainLogo";
import MapLine from "@/components/svg/MapLine";
import Phone from "@/components/svg/Phone";
import Send from "@/components/svg/Send";
import Twitter from "@/components/svg/Twitter";
import useGetFooter from "./hooks/useGetFooter";

const MainFooter = () => {
  const { data: footerRes, isLoading } = useGetFooter();
  const { HOME } = ROUTES;

  return (
    <footer>
      <div className="bg-royal-dark-blue flex flex-col gap-9 px-6 py-12 lg:flex-row lg:gap-36 lg:px-16 lg:py-24">
        <div className="flex flex-1 flex-col gap-14">
          <Link href={HOME.url}>
            <MainLogo />
          </Link>
          <h3 className="text-md font-md text-white">
            {!isLoading ? footerRes.emailDescription : "Loading..."}
          </h3>
          <div className="flex items-center gap-3 border-b-2 border-white py-2">
            <input
              type="email"
              placeholder="Email Address"
              className="ring-none w-full border-none bg-transparent text-white"
            />
            <Send />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <h3 className="text-md font-bold text-white">Quick Links</h3>
          <ul className="flex list-none flex-col gap-3 text-white">
            {!isLoading && footerRes.quickLinks
              ? footerRes.quickLinks.map((link: any, index: number) => {
                  return (
                    <li key={index}>
                      <Link
                        href={link.link.url}
                        className="transition hover:text-[#1AC0E8]"
                      >
                        {link.link.label}
                      </Link>
                    </li>
                  );
                })
              : "Loading..."}
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <h3 className="text-md font-bold text-white">Filinvest Land</h3>
          <ul className="flex list-none flex-col gap-3 text-white">
            {!isLoading && footerRes.filinvestLand
              ? footerRes.filinvestLand.map((link: any, index: number) => {
                  return (
                    <li key={index}>
                      <Link
                        href={link.link.url}
                        className="transition hover:text-[#1AC0E8]"
                      >
                        {link.link.label}
                      </Link>
                    </li>
                  );
                })
              : "Loading..."}
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <h3 className="text-md font-bold text-white">Contact Us</h3>
          <ul className="flex list-none flex-col gap-3 text-white">
            <li className="flex items-center gap-3">
              <div className="w-6 flex-none">
                <Phone />
              </div>
              <Link
                href={`tel:${
                  !isLoading && footerRes.firstPhone
                    ? footerRes?.firstPhone
                    : ""
                }`}
                className="transition hover:text-[#1AC0E8]"
              >
                {!isLoading && footerRes.firstPhone
                  ? footerRes.firstPhone
                  : "Loading..."}
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 flex-none">
                <Phone />
              </div>
              <Link
                href={`tel:${
                  !isLoading && footerRes.secondPhone
                    ? footerRes.secondPhone
                    : ""
                }`}
                className="transition hover:text-[#1AC0E8]"
              >
                {!isLoading && footerRes.secondPhone
                  ? footerRes.secondPhone
                  : "Loading..."}
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 flex-none">
                <Mail />
              </div>
              <Link
                href={`mailto:${
                  !isLoading && footerRes.emailAddress
                    ? footerRes.emailAddress
                    : ""
                }`}
                className="transition hover:text-[#1AC0E8]"
              >
                {!isLoading && footerRes.emailAddress
                  ? footerRes.emailAddress
                  : "Loading..."}
              </Link>
            </li>
            <li className="flex gap-3">
              <div className="w-6 flex-none">
                <MapLine />
              </div>
              {!isLoading && footerRes.address
                ? footerRes.address
                : "Loading..."}
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-oxford-blue grid grid-cols-1 gap-9 px-6 py-12 lg:grid-cols-3 lg:flex-row lg:items-center lg:px-16 lg:py-8">
        <div className="flex-1">
          <h3 className="text-white">{`© Copyright ${new Date().getFullYear()}. ${WEB_TITLE} All Rights Reserved.`}</h3>
        </div>
        <div className="flex gap-7 lg:justify-center">
          {!isLoading && footerRes.facebookLink ? (
            <Link href={footerRes.facebookLink} target="_blank">
              <Facebook />
            </Link>
          ) : null}
          {!isLoading && footerRes.twitterLink ? (
            <Link href={footerRes.twitterLink} target="_blank">
              <Twitter />
            </Link>
          ) : null}
          {!isLoading && footerRes.linkedInLink ? (
            <Link href={footerRes.linkedInLink} target="_blank">
              <LinkedIn />
            </Link>
          ) : null}
        </div>
        <div className="flex gap-7 lg:justify-end">
          {!isLoading && footerRes.bottomRightLinks
            ? footerRes.bottomRightLinks.map((link: any, index: number) => {
                return (
                  <Link
                    href={link.link.url}
                    className="text-white hover:underline"
                    key={index}
                  >
                    {link.link.label}
                  </Link>
                );
              })
            : "Loading..."}
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
