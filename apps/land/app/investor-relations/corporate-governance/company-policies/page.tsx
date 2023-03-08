import Content from "@/components/pages/investor-relations/corporate-governance/company-policies/Content";
import { metaBuilder } from "@/helpers/metaBuilder";
import { CACHE_REVALIDATE } from "@/helpers/constants";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`, {
    next: { revalidate: CACHE_REVALIDATE },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata() {
  const content = await getPageContent("640835c6797c67814e70e5da");
  return metaBuilder(content);
}

const CompanyPoliciesPage = async () => {
  const content = await getPageContent("640835c6797c67814e70e5da");
  return (
    <>
      <Content content={content} />
    </>
  );
};

export default CompanyPoliciesPage;
