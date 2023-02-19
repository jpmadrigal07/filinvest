import MainHeader from "@/components/header/MainHeader";
import OnlinePaymentSection from "@/components/pages/buyers/filpay/OnlinePaymentSection";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const AnnualReportsPage = async () => {
  const content = await getPageContent("63f1f5e08b9b7c24ea00c59c");
  return (
    <>
      <MainHeader isBlueHeader />
      <OnlinePaymentSection content={content} />
    </>
  );
};

export default AnnualReportsPage;
