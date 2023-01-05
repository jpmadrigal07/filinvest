import BorderButton from "@/components/button/BorderButton";
import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section className="2xl-mt-52 -mt-36 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <Image
        src={`/filpayall.png`}
        width={3284}
        height={684}
        alt="Picture of the author"
      />
      <h3 className="text-jet py-12 text-center text-4xl font-bold">
        Online Payments
      </h3>
      <div className="mt-6 flex justify-center gap-12">
        <div className="flex w-1/5 flex-none flex-col items-center gap-6">
          <Image
            src={`/quick-filpayall.png`}
            width={120}
            height={120}
            alt="Picture of the author"
          />
          <h4 className="text-dark-cornflower-blue text-2xl font-bold">
            Quick
          </h4>
          <p className="text-dim-gray text-center">
            Only a few minutes to complete your transaction
          </p>
        </div>
        <div className="flex w-1/5 flex-none flex-col items-center gap-6">
          <Image
            src={`/convenient-filpayall.png`}
            width={120}
            height={120}
            alt="Picture of the author"
          />
          <h4 className="text-dark-cornflower-blue text-2xl font-bold">
            Convenient
          </h4>
          <p className="text-dim-gray text-center">
            Pay anytime, anywhere online on any device 24/7
          </p>
        </div>
        <div className="flex w-1/5 flex-none flex-col items-center gap-6">
          <Image
            src={`/secure-filpayall.png`}
            width={120}
            height={120}
            alt="Picture of the author"
          />
          <h4 className="text-dark-cornflower-blue text-2xl font-bold">
            Secure
          </h4>
          <p className="text-dim-gray text-center">
            All your data and info are protected, secured, and encrypted
          </p>
        </div>
      </div>
      <p className="text-dim-gray mt-16 text-center">
        Enjoy the contactless convenience and security of sending your Filinvest
        payments online.
      </p>
      <div className="my-6 flex justify-center">
        <Image
          src={`/cards.png`}
          width={339}
          height={41}
          alt="Picture of the author"
        />
      </div>
      <div className="my-6 flex justify-center">
        <Image
          src={`/banks.png`}
          width={685}
          height={55}
          alt="Picture of the author"
        />
      </div>
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

export default Content;
