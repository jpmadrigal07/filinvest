import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/financials/financial-highlights/Content";
import { HEADER_INFO } from "@/components/pages/financials/constants";

const FinancialHighlightsPage = () => {
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.financialHighlights;
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

export default FinancialHighlightsPage;
