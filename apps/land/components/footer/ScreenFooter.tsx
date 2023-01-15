import BUYERS_ROUTES from "@/helpers/routes/buyers";
import CONTACT_US_ROUTES from "@/helpers/routes/contactUs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ScreenFooter = () => {
  return (
    <div className="fixed bottom-5 right-7 z-50">
      <div className="flex items-center justify-center gap-3">
        <Link href={BUYERS_ROUTES.FILPAY.url}>
          <Image
            src={`/filpay-floating-icon.png`}
            width={99}
            height={89}
            alt="FilPay Floating"
            className="h-[89px] w-[99px] flex-none"
          />
        </Link>
        <Link href={CONTACT_US_ROUTES.url}>
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
