import Content from "@/components/pages/about-us/our-leadership/board-of-directors/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata() {
  const content = await getPageContent("63fda31b8f9bdd6c055d9553");
  return metaBuilder(content);
}

const BoardOfDirectorsPage = async () => {
  const content = await getPageContent("63fda31b8f9bdd6c055d9553");
  return <Content content={content} />;
};

export default BoardOfDirectorsPage;
