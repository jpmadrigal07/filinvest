import BorderButton from "@/components/button/BorderButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OnlinePaymentSection = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "filpay-online-payments-section"
  );
  return (
    <section className="2xl-mt-52 -mt-36 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <Image
        src={`${data.headerImage.url}`}
        width={3284}
        height={684}
        alt="Picture of the author"
        className="relative z-[10]"
      />
      <h3 className="text-jet mt-12 py-12 text-center text-4xl font-bold md:mt-0">
        {data.title}
      </h3>
      <div className="mt-6 flex justify-center gap-12">
        {data.filpayAdvantages.map((item: any, index: number) => (
          <div
            className="flex w-1/5 flex-none flex-col items-center gap-6"
            key={index}
          >
            <Image
              src={`${item.icon.url}`}
              width={120}
              height={120}
              alt={item.icon.alt}
            />
            <h4 className="text-dark-cornflower-blue text-2xl font-bold">
              {item.title}
            </h4>
            <p className="text-dim-gray text-center">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="text-dim-gray mt-16 text-center">{data.text}</p>
      {data.filpayCards.map((item: any, index: number) => (
        <div className="my-6 flex justify-center" key={index}>
          <Image
            src={`${item.icon.url}`}
            width={339}
            height={41}
            alt={item.icon.alt}
          />
        </div>
      ))}
      {data.filpayBanks.map((item: any, index: number) => (
        <div className="my-6 flex justify-center" key={index}>
          <Image
            src={`${item.icon.url}`}
            width={685}
            height={55}
            alt={item.icon.alt}
          />
        </div>
      ))}
      <div className="m-36 mt-12 flex justify-center">
        <Link href={data.learnMoreLink}>
          <BorderButton
            buttonText="Learn More"
            textColor="dark-cornflower-blue"
            borderColor="dark-cornflower-blue"
          />
        </Link>
      </div>
    </section>
  );
};

export default OnlinePaymentSection;
