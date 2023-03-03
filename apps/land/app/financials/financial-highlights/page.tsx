import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/financials/financial-highlights/Content";
import { HEADER_INFO } from "@/components/pages/financials/constants";

export async function generateMetadata() {
  return {
    title: "Financial Highlights",
    description: "Financial Highlights",
  };
}

const FinancialHighlightsPage = () => {
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.financialHighlights;
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

export default FinancialHighlightsPage;
