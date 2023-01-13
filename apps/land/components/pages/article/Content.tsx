import MainHeader from "@/components/header/MainHeader";
import Facebook from "@/components/svg/Facebook";
import LinkedIn from "@/components/svg/LinkedIn";
import Twitter from "@/components/svg/Twitter";
import Image from "next/image";
import React from "react";
import moment from "moment";
import { News } from "shared-types";
// import serializeUpload from "@/helpers/serializeUpload";
import serializeChildren from "@/helpers/serializeChildren";
import RelatedArticles from "./RelatedArticles";

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
            src={`${process.env.CMS_API_URL}${props && props ? "" : "/"}${
              props?.coverImage.url
            }`}
            width={1036}
            height={806}
            alt="Picture of the author"
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
              {/* start content */}
              {/* { props.content?.map((item: any) => {
                if(item.type === "upload") {
                  return <>{serializeUpload(item)}</>;
                } else if(item.type !== "upload" && item.children) {
                  return <>{serializeChildren(item.children)}</>;
                }
              }) } */}
              <>{serializeChildren(props.content)}</>
              {/* <h2 className="text-jet text-4xl font-bold">
                Pharetra diam sit amet nisl suscipit adipiscing. Amet nulla
                facilisi morbi tempus iaculis urna id.
              </h2>
              <p className="text-dim-gray">
                Pharetra sit amet aliquam id diam maecenas ultricies mi eget.
                Bibendum arcu vitae elementum curabitur. Ac tincidunt vitae
                semper quis lectus nulla at. Neque aliquam vestibulum morbi
                blandit cursus. Massa tincidunt dui ut ornare. Enim sit amet
                venenatis urna. Morbi enim nunc faucibus a pellentesque sit amet
                porttitor. Sit amet nisl suscipit adipiscing bibendum est. Et
                odio pellentesque diam volutpat commodo. Quisque egestas diam in
                arcu cursus euismod quis. Egestas erat imperdiet sed euismod
                nisi porta lorem mollis aliquam. Cras sed felis eget velit
                aliquet sagittis id. Tempus urna et pharetra pharetra massa
                massa ultricies. Tellus elementum sagittis vitae et.
              </p>
              <p className="text-dim-gray">
                Tincidunt dui ut ornare lectus sit amet. Est pellentesque elit
                ullamcorper dignissim cras. Elit at imperdiet dui accumsan sit
                amet. Diam phasellus vestibulum lorem sed risus ultricies
                tristique nulla aliquet. Natoque penatibus et magnis dis
                parturient montes. Quis ipsum suspendisse ultrices gravida
                dictum fusce ut placerat. Nisi quis eleifend quam adipiscing
                vitae proin sagittis nisl rhoncus. At lectus urna duis
                convallis. Imperdiet nulla malesuada pellentesque elit eget.
                Ultrices eros in cursus turpis massa. Vitae tempus quam
                pellentesque nec nam aliquam sem.
              </p>
              <Image
                src={`/article.png`}
                width={1036}
                height={806}
                alt="Picture of the author"
              />
              <h2 className="text-jet text-4xl font-bold">
                Massa tincidunt dui ut ornare
              </h2>
              <p className="text-dim-gray">
                Pharetra sit amet aliquam id diam maecenas ultricies mi eget.
                Bibendum arcu vitae elementum curabitur. Ac tincidunt vitae
                semper quis lectus nulla at. Neque aliquam vestibulum morbi
                blandit cursus. Massa tincidunt dui ut ornare. Enim sit amet
                venenatis urna. Morbi enim nunc faucibus a pellentesque sit amet
                porttitor. Sit amet nisl suscipit adipiscing bibendum est. Et
                odio pellentesque diam volutpat commodo. Quisque egestas diam in
                arcu cursus euismod quis. Egestas erat imperdiet sed euismod
                nisi porta lorem mollis aliquam. Cras sed felis eget velit
                aliquet sagittis id. Tempus urna et pharetra pharetra massa
                massa ultricies. Tellus elementum sagittis vitae et.
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Image
                    src={`/article.png`}
                    width={1036}
                    height={806}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex-1">
                  <Image
                    src={`/article.png`}
                    width={1036}
                    height={806}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <h5 className="border-blue-ryb text-sonic-silver border-l-4 pl-6 text-xl italic">
                Pharetra sit amet aliquam id diam maecenas ultricies mi eget.
                Bibendum arcu vitae elementum curabitur. Ac tincidunt vitae
                semper quis lectus nulla at. Neque aliquam vestibulum morbi
                blandit cursus. Massa tincidunt dui ut ornare. Enim sit amet
                venenatis urna. Morbi enim nunc faucibus a pellentesque sit amet
                porttitor.
              </h5> */}
              {/* end content */}
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
