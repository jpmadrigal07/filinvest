import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/investor-relations/investor-relations-program/Content";

const InvestorRelationsProgramPage = () => {
  return (
    <>
      <MainHeader
        title="Investor Relations Program"
        breadcrumbs="Home / Investor Relations / Investor Relations Program"
        bgUrl="investor-relations-program.png"
      />
      <Content />
    </>
  );
};

export default InvestorRelationsProgramPage;
