import MainHeader from "@/components/header/MainHeader";
import Facebook from "@/components/svg/Facebook";
import LinkedIn from "@/components/svg/LinkedIn";
import Twitter from "@/components/svg/Twitter";
import Image from "next/image";
import React from "react";
import moment from "moment";
import { News } from "shared-types";
// import serializeUpload from "@/helpers/serializeUpload";
// import serializeChildren from "@/helpers/serializeChildren";
import RelatedArticles from "./RelatedArticles";
import { testSerialize } from "@/helpers/testSerialize";

const Content = (props: News) => {
  return (
    <>
      <MainHeader
        title={`${props && props.title ? props?.title : "..."}`}
        isBlueHeader
        bgUrl="blue-header-bg-2.png"
        isTitleSmall
      />
      <section className="-mt-48 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-72">
        <div className="flex flex-col items-center gap-6">
          <Image
            src={`${props && props ? "" : "/"}${props?.coverImage.url}`}
            width={1364}
            height={663}
            alt={`${props?.coverImage.alt}`}
          />
          <div className="mt-8 flex flex-col items-center gap-4">
            <Image
              src={`/profile-pic.png`}
              width={98}
              height={98}
              alt="Picture of the author"
            />
            <div>
              <h3 className="text-jet text-center text-xl font-bold">
                {`${props?.author.firstName} ${props?.author.lastName}`} |
                Marketing Manager
              </h3>
              <h4 className="text-vivid-sky-blue text-center text-lg">
                {`${props?.author.email}`}
              </h4>
            </div>
          </div>
          <div className="mt-16 flex gap-14">
            <div className="flex-none">
              <div className="border-blue-ryb flex flex-col border-t-4">
                <h3 className="text-jet text-center text-4xl font-bold">
                  {moment(props?.createdAt).format("DD")}
                </h3>
                <p className="text-jet text-center text-xs">
                  {moment(props?.createdAt).format("MMM")},{" "}
                  {moment(props?.createdAt).format("YY")}
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <Facebook color="#303030" />
                </div>
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <Twitter color="#303030" />
                </div>
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <LinkedIn color="#303030" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <>{testSerialize(props.content)}</>
              <h3 className="text-bold mt-6 text-xl">
                Tags: <span className="text-vivid-sky-blue">HOUSING</span>
              </h3>
              <div className="flex gap-3">
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <Facebook color="#303030" />
                </div>
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <Twitter color="#303030" />
                </div>
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <LinkedIn color="#303030" />
                </div>
              </div>
            </div>
          </div>
          {/* @ts-expect-error Server Component */}
          <RelatedArticles />
        </div>
      </section>
    </>
  );
};

export default Content;
