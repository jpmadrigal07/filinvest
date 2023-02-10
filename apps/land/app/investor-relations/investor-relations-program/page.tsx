import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/investor-relations/investor-relations-program/Content";
import { HEADER_INFO } from "@/components/pages/investor-relations/constants";

const InvestorRelationsProgramPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.investorRelationsProgram;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default InvestorRelationsProgramPage;
