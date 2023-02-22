"use client";
import BorderButton from "@/components/button/BorderButton";
import ROUTES from "@/helpers/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 14.5752826,
  lng: 121.0490635,
};

const Content = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB-Og1uzNQZVJ6Onne-56491DlQ1IMlovY",
  });
  const { PRIVACY_POLICY, TERMS_OF_USE } = ROUTES;

  const renderMap = () => {
    return isLoaded ? (
      <GoogleMap mapContainerStyle={containerStyle} zoom={18} center={center}>
        <Marker position={center} />
      </GoogleMap>
    ) : (
      <></>
    );
  };
  return (
    <section className="mt-24">
      <div className="mx-9 flex flex-col gap-24 md:flex-row xl:mx-16 2xl:mx-44">
        <div className="flex-1">
          <h2 className="text-dark-cornflower-blue text-4xl font-bold">
            Send us a message
          </h2>
          <div className="mt-8">
            <form>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name<span className="text-red">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact<span className="text-red">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email<span className="text-red">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message<span className="text-red">*</span>
                </label>
                <div className="mt-2">
                  <textarea
                    rows={4}
                    name="message"
                    id="message"
                    className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="relative mt-4 flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="privacy"
                    aria-describedby="privacy"
                    name="candidates"
                    type="checkbox"
                    className="text-dark-cornflower-blue focus:ring-none h-4 w-4 rounded border-gray-300"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="privacy"
                    className="font-medium text-gray-700"
                  >
                    I understand and agree to the{" "}
                    <Link
                      href={PRIVACY_POLICY.url}
                      target="_blank"
                      className="text-dark-cornflower-blue underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href={TERMS_OF_USE.url}
                      target="_blank"
                      className="text-dark-cornflower-blue underline"
                    >
                      Terms of Use
                    </Link>
                    .
                  </label>
                </div>
              </div>
              <div className="mt-12 flex justify-end">
                <BorderButton
                  buttonText="Submit"
                  textColor="dark-cornflower-blue"
                  borderColor="dark-cornflower-blue"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-12">
          <div className="flex gap-5">
            <div>
              <Image
                src="/location-icon.png"
                width={75}
                height={75}
                alt="Picture of the author"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-dark-cornflower-blue text-2xl font-bold">
                CORPORATE HEADQUARTERS
              </h2>
              <p className="text-jet mt-3 font-bold">
                Filinvest Building, 79 EDSA,
                <br />
                Mandaluyong City, 1550 Philippines
              </p>
              <p className="text-dim-gray mt-3">(63 2) 7-918-8188</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <Image
                src="/location-icon.png"
                width={75}
                height={75}
                alt="Picture of the author"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-dark-cornflower-blue text-2xl font-bold">
                CUSTOMER SERVICE
              </h2>
              <div className="flex gap-12">
                <div>
                  <p className="text-jet mt-3 font-bold">Metro Manila</p>
                  <p className="text-dim-gray mt-3">(63 2) 8-588-1688</p>
                </div>
                <div>
                  <p className="text-jet mt-3 font-bold">
                    Outside Metro Manila
                  </p>
                  <p className="text-jet text-sm">
                    Domestic Toll Free for PLDT/Smart landline
                  </p>
                  <p className="text-dim-gray mt-2">1800-10-588-1688</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <Image
                src="/location-icon.png"
                width={75}
                height={75}
                alt="Picture of the author"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-dark-cornflower-blue text-2xl font-bold">
                SALES HOTLINE
              </h2>
              <p className="text-jet mt-3 font-bold">Metro Manila</p>
              <p className="text-dim-gray mt-3">
                (63 2) 8-850-0888/(63 919) 076-4836
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="text-jet mt-3 font-bold">Cebu</p>
                  <p className="text-dim-gray mt-3">(63 919) 076-4836</p>
                </div>
                <div>
                  <p className="text-jet mt-3 font-bold">Davao</p>
                  <p className="text-dim-gray mt-3">(63 919) 076-4836</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        {/* <Image
          src="/filinvest-gmaps.png"
          width={1434}
          height={375}
          alt="Picture of the author"
          className="w-full"
        /> */}
        {renderMap()}
      </div>
    </section>
  );
};

export default Content;
