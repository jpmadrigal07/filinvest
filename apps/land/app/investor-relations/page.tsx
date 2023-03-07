import { metaBuilder } from "@/helpers/metaBuilder";
import Content from "@/components/pages/investor-relations/Content";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata() {
  const content = await getPageContent("640594d02dd194ccf101c72e");
  return metaBuilder(content);
}

const InvestorRelationsPage = async () => {
  const content = await getPageContent("640594d02dd194ccf101c72e");
  return <Content content={content} />;
};

export default InvestorRelationsPage;
