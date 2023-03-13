import Content from "@/components/pages/sitemap/Content";
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
  const content = await getPageContent("640dcff077ceb07ea6f89863");
  return metaBuilder(content);
}

const SitemapPage = async () => {
  const content = await getPageContent("640dcff077ceb07ea6f89863");
  return <Content content={content} />;
};

export default SitemapPage;
