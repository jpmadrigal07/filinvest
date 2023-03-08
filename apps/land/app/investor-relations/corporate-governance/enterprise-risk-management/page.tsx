import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/enterprise-risk-management/Content";
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
  const content = await getPageContent("639a584bb60dc36e6fc86d90");
  return metaBuilder(content);
}

const ShareInformationPage = async () => {
  const content = await getPageContent("63f22c28754b3f5b4132a500");
  const { title, breadcrumbs, image, tabs } =
    HEADER_INFO.enterpriseRiskManagement;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <Content />
    </>
  );
};

export default ShareInformationPage;
