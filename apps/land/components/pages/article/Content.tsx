"use client";
import MainHeader from "@/components/header/MainHeader";
import Facebook from "@/components/svg/Facebook";
import LinkedIn from "@/components/svg/LinkedIn";
import Twitter from "@/components/svg/Twitter";
import Image from "next/image";
import React from "react";
import moment from "moment";
import { News } from "shared-types";
import RelatedArticles from "./RelatedArticles";
import { serializeRichText } from "@/helpers/serializeRichText";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Content = (props: News) => {
  const articleUrl = `${process.env.LAND_URL}/article/${props.slug}`;
  const linkedInSharer = `https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`;
  const facebookSharer = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`;
  const twitterSharer = `https://twitter.com/intent/tweet?text=${articleUrl}`;
  const router = useRouter();
  const tagWrapper = (type: string, text: string) => {
    return (
      <span
        onClick={() => {
          router.push(`property-search?${type}=${text}`);
        }}
        className="text-vivid-sky-blue cursor-pointer uppercase hover:opacity-70"
      >
        {text}
      </span>
    );
  };
  const renderTags = () => {
    let tags = [];
    if (props.locationGroupTag) {
      tags.push(tagWrapper("locationGroup", props.locationGroupTag?.title));
    }
    if (props.locationTag) {
      tags.push(tagWrapper("location", props.locationTag?.title));
    }
    if (props.projectTypeTag) {
      tags.push(tagWrapper("projectType", props.projectTypeTag?.title));
    }
    if (props.propertyTypeTag) {
      tags.push(tagWrapper("propertyType", props.propertyTypeTag?.title));
    }
    if (props.subLocationTag) {
      tags.push(tagWrapper("subLocation", props.subLocationTag?.title));
    }
    if (props.site) {
      tags.push(tagWrapper("brand", props.site?.title));
    }
    return tags.length > 0 ? (
      tags
    ) : (
      <span className="text-gainsboro italic">No tags</span>
    );
  };
  return (
    <>
      <MainHeader
        title={`${props && props.title ? props?.title : "..."}`}
        isBlueHeader
        bgUrl="blue-header-bg-2.png"
        isTitleSmall
      />
      {/* className="mx-6 -mt-48 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-72" */}
      <section className="relative mx-6 -mt-28 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
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
          <div className="mt-10 flex flex-col gap-5 px-4 md:mt-16 md:flex-row md:gap-10 lg:gap-14">
            <div className="flex-none">
              <div className="border-blue-ryb flex flex-col md:border-t-4">
                <h3 className="text-jet text-center text-4xl font-bold">
                  {moment(props?.createdAt).format("DD")}
                </h3>
                <p className="text-jet text-center text-xs">
                  {moment(props?.createdAt).format("MMM")},{" "}
                  {moment(props?.createdAt).format("YY")}
                </p>
              </div>
              <div className="mt-5 flex flex-row justify-center gap-3 md:mt-8 md:flex-col">
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <Link href={`${facebookSharer}`} target="_blank">
                    <Facebook color="#303030" />
                  </Link>
                </div>
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <Link href={`${twitterSharer}`} target="_blank">
                    <Twitter color="#303030" />
                  </Link>
                </div>
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <Link href={`${linkedInSharer}`} target="_blank">
                    <LinkedIn color="#303030" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6 text-center md:justify-start md:text-left">
              <>{serializeRichText(props.content)}</>
              <h3 className="text-bold flex flex-col justify-center gap-4 text-xl md:mt-6 md:flex-row md:justify-start">
                Tags:{" "}
                <div className="flex flex-col  justify-center gap-4 md:flex-row md:justify-start">
                  {renderTags()}
                </div>
              </h3>
              <div className="flex justify-center  gap-3 md:justify-start">
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <Link href={`${facebookSharer}`} target="_blank">
                    <Facebook color="#303030" />
                  </Link>
                </div>
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <Link href={`${twitterSharer}`} target="_blank">
                    <Twitter color="#303030" />
                  </Link>
                </div>
                <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                  <Link href={`${linkedInSharer}`} target="_blank">
                    <LinkedIn color="#303030" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <RelatedArticles selectedNews={props} />
        </div>
      </section>
    </>
  );
};

export default Content;
