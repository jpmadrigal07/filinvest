import Content from "@/components/pages/investor-relations/corporate-governance/corporate-social-responsibility/Content";
import { CACHE_REVALIDATE } from "@/helpers/constants";
import { metaBuilder } from "@/helpers/metaBuilder";

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
  const content = await getPageContent("63f22159182491936d85fe44");
  return metaBuilder(content);
}

const corporateSocialResponsibility = async () => {
  const content = await getPageContent("63f22159182491936d85fe44");
  return <Content content={content} />;
};

export default corporateSocialResponsibility;
