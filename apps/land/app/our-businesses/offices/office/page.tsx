import PageContent from "@/components/pages/our-businesses/offices/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata() {
  const content = await getPageContent("63f1c8faaf1792ce5d297e9e");
  return metaBuilder(content);
}

const OfficePage = async () => {
  const content = await getPageContent("63f1c8faaf1792ce5d297e9e");
  return (
    <>
      <PageContent content={content} projects={[]} locations={[]} />
    </>
  );
};

export default OfficePage;
