import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/buyers/constants";
import Content from "@/components/pages/buyers/home-loan-calculator/Content";

export async function generateMetadata() {
  return {
    title: "Home Loan Calculator",
    description: "Home Loan Calculator",
  };
}

const AnnualReportsPage = async () => {
  const { title, breadcrumbs } = HEADER_INFO.contactUs;
  return (
    <>
      <MainHeader
        isBlueHeader
        title={title}
        breadcrumbs={breadcrumbs}
        isTitleSmall={true}
      />
      <Content />
    </>
  );
};

export default AnnualReportsPage;
