import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/code-business-conduct-ethics/Content";
import CodeOfBusinessConductAndEthics from "@/components/pages/investor-relations/corporate-governance/code-business-conduct-ethics/CodeOfBusinessConductAndEthics";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const CodeBusinessConductEthicsPage = async () => {
  const content = await getPageContent("63f21891b063b608e2056b92");
  const { title, breadcrumbs, image, tabs } =
    HEADER_INFO.codeBusinessConductEthics;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <CodeOfBusinessConductAndEthics content={content} />
    </>
  );
};

export default CodeBusinessConductEthicsPage;
