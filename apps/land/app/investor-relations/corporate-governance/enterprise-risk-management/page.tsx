import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/enterprise-risk-management/Content";

export async function generateMetadata() {
  return {
    title: "Enterprise Risk Management",
    description: "Enterprise Risk Management",
  };
}

const ShareInformationPage = () => {
  const { title, breadcrumbs, image, tabs } =
    HEADER_INFO.enterpriseRiskManagement;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <Content />
    </>
  );
};

export default ShareInformationPage;
