import Content from "@/components/pages/our-businesses/office-parks/Content";
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
  return {
    title: "Office Parks",
    description: "Office Parks",
  };
}

const OfficeParksPage = async () => {
  const content = await getPageContent("63f1cbdffa79c21ee7bb5cd5");
  return (
    <>
      <Content content={content} />
    </>
  );
};

export default OfficeParksPage;
