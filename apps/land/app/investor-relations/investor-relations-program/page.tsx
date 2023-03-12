import Content from "@/components/pages/investor-relations/investor-relations-program/Content";
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
  const content = await getPageContent("640be8732aff53ceb80cfebd");
  return metaBuilder(content);
}

const InvestorRelationsProgramPage = async () => {
  const content = await getPageContent("640be8732aff53ceb80cfebd");
  return <Content content={content} />;
};

export default InvestorRelationsProgramPage;
