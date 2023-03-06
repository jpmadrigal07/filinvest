import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/investor-relations/dividend-policy/Content";
import { HEADER_INFO } from "@/components/pages/investor-relations/constants";
//import { getPageContent } from "../../page";

//const DIVIDEND_POLICY_PAGE_ID = ""
export async function generateMetadata() {
  return {
    title: "Dividend Policy",
    description: "Dividend Policy",
  };
}

const DividendPolicyPage = async () => {
  //const content = await getPageContent(DIVIDEND_POLICY_PAGE_ID);
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.dividendPolicy;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
        bgUrlSmall={imageSmall}
      />
      <Content />
    </>
  );
};

export default DividendPolicyPage;
