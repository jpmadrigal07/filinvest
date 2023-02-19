import BorderButton from "@/components/button/BorderButton";
import Image from "next/image";
import React from "react";

const OnlinePaymentSection = ({ content }: any) => {
  return (
    <section className="2xl-mt-52 -mt-36 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <Image
        src={`${content.content[0].headerImage.url}`}
        width={3284}
        height={684}
        alt="Picture of the author"
      />
      <h3 className="text-jet py-12 text-center text-4xl font-bold">
        {content.content[0].title}
      </h3>
      <div className="mt-6 flex justify-center gap-12">
        {content.content[0].filpayAdvantages.map((item: any) => (
          <div className="flex w-1/5 flex-none flex-col items-center gap-6">
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
      <p className="text-dim-gray mt-16 text-center">
        {content.content[0].text}
      </p>
      {content.content[0].filpayCards.map((item: any) => (
        <div className="my-6 flex justify-center">
          <Image
            src={`${item.icon.url}`}
            width={339}
            height={41}
            alt={item.icon.alt}
          />
        </div>
      ))}
      {content.content[0].filpayBanks.map((item: any) => (
        <div className="my-6 flex justify-center">
          <Image
            src={`${item.icon.url}`}
            width={339}
            height={41}
            alt={item.icon.alt}
          />
        </div>
      ))}
      <div className="m-36 mt-12 flex justify-center">
        <BorderButton
          buttonText="Learn More"
          textColor="dark-cornflower-blue"
          borderColor="dark-cornflower-blue"
        />
      </div>
    </section>
  );
};

export default OnlinePaymentSection;
