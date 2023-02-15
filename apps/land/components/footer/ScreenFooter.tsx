import Image from "next/image";
import Link from "next/link";
import React from "react";

const ScreenFooter = ({ content }: any) => {
  return (
    <div className="fixed bottom-5 right-7 z-50">
      <div className="flex items-center justify-center gap-3">
        <Link
          href={content.content[9].filPayLink}
          className="opacity-100 transition duration-150 hover:opacity-70"
        >
          <Image
            src={`/filpay-floating-icon.png`}
            width={99}
            height={89}
            alt="FilPay Floating"
            className="h-[89px] w-[99px] flex-none"
          />
        </Link>
        <Link
          href={content.content[9].messageLink}
          className="opacity-100 transition duration-150 hover:opacity-70"
        >
          <Image
            src={`/message-floating-icon.png`}
            width={74}
            height={74}
            alt="Message Floating"
            className="h-[74px] w-[74px] flex-none"
          />
        </Link>
      </div>
    </div>
  );
};

export default ScreenFooter;
