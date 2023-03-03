import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/manual-corporate-governance/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata() {
  const content = await getPageContent("63f211e17ed2c505a81c3b77");
  return metaBuilder(content);
}

const ManualCorporateGovernancePage = async () => {
  const content = await getPageContent("63f211e17ed2c505a81c3b77");
  const { title, breadcrumbs, image, tabs } =
    HEADER_INFO.manualCorporateGovernance;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <Content content={content} />
    </>
  );
};

export default ManualCorporateGovernancePage;
