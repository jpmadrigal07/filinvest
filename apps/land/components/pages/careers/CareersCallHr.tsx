import React from "react";
import MapPin from "@/components/svg/MapPin";
import PhoneBlue from "@/components/svg/PhoneBlue";
import Link from "next/link";
export default function CareersCallHr({ content }: any) {
  const careersCallHrBlock = content?.content.find(
    (item: any) => item.blockType === "careers-call-hr"
  );

  const contacts = careersCallHrBlock?.contacts;

  return (
    <div className="mt-9 pt-14 pb-24">
      <h2 className="text-dark-cornflower-blue text-4xl font-bold">
        {careersCallHrBlock?.title}
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-4 md:mx-9 md:grid-cols-2 lg:grid-cols-3 2xl:mx-14">
        {contacts?.map((contact: any) => (
          <div className="bg-cultured flex flex-col gap-3 p-8">
            <div className="flex items-center gap-3">
              <div className="flex-none">
                <MapPin />
              </div>
              <p className="font-bold">{contact?.address}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-none">
                <PhoneBlue />
              </div>
              <p>{contact?.phone}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-jet mt-6 md:mx-9 2xl:mx-14">
        Or email us at{" "}
        <Link
          href="mailto:WeRecruitTalent@filinvestland.com"
          className="text-dark-cornflower-blue hover:underline"
        >
          {careersCallHrBlock?.email}
        </Link>
      </p>
    </div>
  );
}
