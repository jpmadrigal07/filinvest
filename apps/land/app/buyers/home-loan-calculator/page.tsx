import { metaBuilder } from "@/helpers/metaBuilder";
import Content from "@/components/pages/buyers/home-loan-calculator/Content";
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
  const content = await getPageContent("639a582ab60dc36e6fc86d64");
  return metaBuilder(content);
}

const AnnualReportsPage = async () => {
  const content = await getPageContent("639a582ab60dc36e6fc86d64");
  return <Content content={content} />;
};

export default AnnualReportsPage;
