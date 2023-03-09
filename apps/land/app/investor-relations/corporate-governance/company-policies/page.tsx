import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/company-policies/Content";
import { getPageContent } from "../../../page";
import { metaBuilder } from "@/helpers/metaBuilder";

const COMPANY_POLICIES_PAGE_ID = "640835c6797c67814e70e5da";
export async function generateMetadata() {
  const content = await getPageContent(COMPANY_POLICIES_PAGE_ID);
  return metaBuilder(content);
}

const CompanyPoliciesPage = async () => {
  console.log("???");
  const content = await getPageContent(COMPANY_POLICIES_PAGE_ID);
  return <Content content={content} />;
};

export default CompanyPoliciesPage;
