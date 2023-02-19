import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/corporate-social-responsibility/Content";
import EnvironmentalPreservation from "@/components/pages/investor-relations/corporate-governance/corporate-social-responsibility/EnvironmentalPreservation";
import Programs from "@/components/pages/investor-relations/corporate-governance/corporate-social-responsibility/Programs";
import TitleText from "@/components/pages/investor-relations/corporate-governance/corporate-social-responsibility/TitleText";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const CompanyPoliciesPage = async () => {
  const content = await getPageContent("63f22159182491936d85fe44");
  const { title, breadcrumbs, image, tabs } =
    HEADER_INFO.corporateSocialResponsibility;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <TitleText content={content} />
      <EnvironmentalPreservation content={content} />
      <Programs content={content} />
    </>
  );
};

export default CompanyPoliciesPage;
