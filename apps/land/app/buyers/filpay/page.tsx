import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/buyers/filpay/Content";

export async function generateMetadata() {
  return {
    title: "FilPay",
    description: "FilPay",
  };
}

const AnnualReportsPage = () => {
  return (
    <>
      <MainHeader isBlueHeader />
      <Content />
    </>
  );
};

export default AnnualReportsPage;
