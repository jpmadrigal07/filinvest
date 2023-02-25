import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/constants";
import Content from "@/components/pages/investor-relations/Content";

export async function generateMetadata() {
  return {
    title: "Investor Relations",
    description: "Investor Relations",
  };
}

const InvestorRelationsPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.investorRelations;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default InvestorRelationsPage;
