import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/buyers/filpay/Content";
import HeaderImage from "@/components/pages/buyers/filpay/HeaderImage";
import OnlinePaymentSection from "@/components/pages/buyers/filpay/OnlinePaymentSection";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const AnnualReportsPage = async () => {
  const content = await getPageContent("639a581bb60dc36e6fc86d4a");
  console.log(content.content[1]);
  return (
    <>
      <MainHeader isBlueHeader />
      <HeaderImage content={content} />
      <OnlinePaymentSection content={content} />
    </>
  );
};

export default AnnualReportsPage;
