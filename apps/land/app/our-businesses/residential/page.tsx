import { metaBuilder } from "@/helpers/metaBuilder";
import Content from "@/components/pages/our-businesses/residential/Content";
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
  const content = await getPageContent("63f1b2db7965949aabaa9dd9");
  return metaBuilder(content);
}

const ResidentialPage = async () => {
  const content = await getPageContent("63f1b2db7965949aabaa9dd9");
  return <Content content={content} />;
};

export default ResidentialPage;
