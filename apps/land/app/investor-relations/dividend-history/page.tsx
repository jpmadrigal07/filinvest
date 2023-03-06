import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/investor-relations/dividend-history/Content";
import { HEADER_INFO } from "@/components/pages/investor-relations/constants";

export async function generateMetadata() {
  return {
    title: "Dividend History",
    description: "Dividend History",
  };
}

const DividendHistoryPage = () => {
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.dividendHistory;
  return (
    <div className="sketch-bg">
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
        bgUrlSmall={imageSmall}
      />
      <Content />
    </div>
  );
};

export default DividendHistoryPage;
