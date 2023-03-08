import Content from "@/components/pages/investor-relations/disclosures/Content";
import { getPageContent } from "../../page";
import { metaBuilder } from "@/helpers/metaBuilder";

const DISCLOSURES_PAGE_ID = "6403761dcda32af5e1100236";
export async function generateMetadata() {
  const content = await getPageContent(DISCLOSURES_PAGE_ID);
  return metaBuilder(content);
}

const DisclosuresPage = async () => {
  const content = await getPageContent(DISCLOSURES_PAGE_ID);
  /* const { title, breadcrumbs, image, imageSmall } = HEADER_INFO.disclosures; */
  return <Content content={content} />;
};

export default DisclosuresPage;
