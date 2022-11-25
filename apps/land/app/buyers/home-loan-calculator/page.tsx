import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/buyers/constants";
import Content from "@/components/pages/buyers/home-loan-calculator/Content";

const AnnualReportsPage = () => {
  const { title, breadcrumbs } = HEADER_INFO.contactUs;
  return (
    <>
      <MainHeader isBlueHeader title={title} breadcrumbs={breadcrumbs} />
      <Content />
    </>
  );
};

export default AnnualReportsPage;
