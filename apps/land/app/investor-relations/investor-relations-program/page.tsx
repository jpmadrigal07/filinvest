import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/investor-relations/investor-relations-program/Content";
import { HEADER_INFO } from "@/components/pages/investor-relations/constants";

export async function generateMetadata() {
  return {
    title: "Investor Relations Program",
    description: "Investor Relations Program",
  };
}

const InvestorRelationsProgramPage = () => {
  const { title, breadcrumbs, image, imageSmall } =
    HEADER_INFO.investorRelationsProgram;
  return (
    <div className="sketch-bg">
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
      />
      <Content />
    </div>
  );
};

export default InvestorRelationsProgramPage;
