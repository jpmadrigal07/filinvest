import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/board-committees/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/board-committees/enterprise-risk-management/Content";

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
