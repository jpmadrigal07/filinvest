import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/annual-corporate-governance-report/Content";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata() {
  return {
    title: "Annual Corporate Governance",
    description: "Annual Corporate Governance",
  };
}

const AnnualCorporateGovernanceReportPage = async () => {
  const content = await getPageContent("63f21bbf9813fc62eebc9960");
  const { title, breadcrumbs, image, tabs } =
    HEADER_INFO.annualCorporateGovernanceReport;
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

export default AnnualCorporateGovernanceReportPage;
