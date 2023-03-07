import Content from "@/components/pages/about-us/our-leadership/senior-management-team/Content";
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
  const content = await getPageContent("63ecc2d7e742304b009f117f");
  return metaBuilder(content);
}

const SeniorManagementTeamPage = async () => {
  const content = await getPageContent("63ecc2d7e742304b009f117f");
  return <Content content={content} />;
};

export default SeniorManagementTeamPage;
