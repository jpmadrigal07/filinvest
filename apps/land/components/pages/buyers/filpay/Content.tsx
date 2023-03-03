import React from "react";
import MainHeader from "@/components/header/MainHeader";
import OnlinePaymentSection from "@/components/pages/buyers/filpay/OnlinePaymentSection";

const Content = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "filpay-online-payments-section"
  );
  return (
    <>
      <MainHeader
        isBlueHeader
        bgUrl={data.mainHeaderImage.url}
        bgUrlSmall={data.mainHeaderImageSmall.url}
      />
      <OnlinePaymentSection content={content} />
    </>
  );
};

export default Content;
