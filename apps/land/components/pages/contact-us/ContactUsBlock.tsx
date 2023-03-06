"use client";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ROUTES from "@/helpers/routes";
import BorderButton from "@/components/button/BorderButton";
import Image from "next/image";
import Link from "next/link";

const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 14.5752826,
  lng: 121.0490635,
};

export default function ContactUsBlock({ content }: any) {
  const contactUsBlock = content?.content.find(
    (item: any) => item.blockType === "contact-us"
  );

  const items = contactUsBlock?.item;

  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GMAPS_TOKEN as string,
  });
  const { PRIVACY_POLICY, TERMS_OF_USE } = ROUTES;

  const renderMap = () => {
    return isLoaded ? (
      <GoogleMap mapContainerStyle={containerStyle} zoom={18} center={center}>
        <Marker
          position={{
            lat: contactUsBlock?.latitudeFilinvestOfficeMap,
            lng: contactUsBlock?.longitudeFilinvestOfficeMap,
          }}
        />
      </GoogleMap>
    ) : (
      <></>
    );
  };
  const onSubmit = (data: any) => {
    if (data.privacy) {
      router.push(`/contact-us/submit?data=${JSON.stringify(data)}`);
    } else {
      alert("Please agree with our privacy and terms");
    }
  };

  return (
    <section className="mt-24">
      <div className="mx-9 flex flex-col gap-24 md:flex-row xl:mx-16 2xl:mx-44">
        <div className="flex-1">
          <h2 className="text-dark-cornflower-blue text-4xl font-bold">
            {contactUsBlock?.title}
          </h2>
          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name<span className="text-red">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="firstName"
                      className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
                      {...register("firstName", { required: true })}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name<span className="text-red">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="lastName"
                      className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
                      {...register("lastName", { required: true })}
                    />
                  </div>
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
                    id="contact"
                    className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
                    {...register("contact", { required: true })}
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
                    id="email"
                    className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
                    {...register("email", { required: true })}
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
                    id="message"
                    className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
                    defaultValue={""}
                    {...register("notes", { required: true })}
                  />
                </div>
              </div>
              <div className="relative mt-4 flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="privacy"
                    aria-describedby="privacy"
                    type="checkbox"
                    className="text-dark-cornflower-blue focus:ring-none h-4 w-4 rounded border-gray-300"
                    {...register("privacy")}
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
                <button type="submit">
                  <BorderButton
                    buttonText="Submit"
                    textColor="dark-cornflower-blue"
                    borderColor="dark-cornflower-blue"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-14">
          {items?.map((item: any) => (
            <div className="flex gap-5" key={item?.id}>
              <div className="max-w-[56.56px] lg:max-w-[70px] xl:max-w-[75px]">
                <Image
                  src={item?.logo?.url}
                  width={75}
                  height={75}
                  alt={item?.logo?.alt}
                />
              </div>
              <div className="mt-5">
                <h2 className="text-dark-cornflower-blue text-2xl font-bold">
                  {item?.title}
                </h2>
                <div className="flex max-w-[444px] flex-wrap gap-12">
                  {item?.addressContact?.map((child: any, index: number) => (
                    <div
                      key={child?.id}
                      className={`${
                        item?.addressContact?.length > 2 &&
                        index >= 1 &&
                        "-mt-12"
                      }`}
                    >
                      <p className="text-jet mt-3 font-bold">
                        {child?.address}
                      </p>
                      {child?.isAddressSecondary ? (
                        <p className="text-jet text-sm">{child?.address2}</p>
                      ) : (
                        <p className="font-bold">{child?.address2}</p>
                      )}
                      <p className="text-dim-gray mt-2">{child?.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32">{renderMap()}</div>
    </section>
  );
}
