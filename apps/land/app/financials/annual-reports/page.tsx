import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/financials/annual-reports/Content";
import { HEADER_INFO } from "@/components/pages/financials/constants";

export async function generateMetadata() {
  return {
    title: "Annual Reports",
    description: "Annual Reports",
  };
}

const AnnualReportsPage = () => {
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.annualReports;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
        tabs={tabs}
      />
      <Content />
    </>
  );
};

export default AnnualReportsPage;
