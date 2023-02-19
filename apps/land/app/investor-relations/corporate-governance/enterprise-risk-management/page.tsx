import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/enterprise-risk-management/Content";
import EnterpriseRiskManagementTable from "@/components/pages/investor-relations/corporate-governance/enterprise-risk-management/EnterpriseRiskManagementTable";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ShareInformationPage = async () => {
  const content = await getPageContent("63f22c28754b3f5b4132a500");
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
      <EnterpriseRiskManagementTable content={content} />
      {/* <Content /> */}
    </>
  );
};

export default ShareInformationPage;
