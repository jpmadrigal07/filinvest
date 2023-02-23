import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/company-policies/Content";

// async function getPageContent(id: string) {
//   const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const CompanyPoliciesPage = async () => {
  // const content = await getPageContent("639a5782b60dc36e6fc86c93");
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.companyPolicies;
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

export default CompanyPoliciesPage;
