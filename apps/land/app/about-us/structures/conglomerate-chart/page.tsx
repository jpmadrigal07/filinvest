import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/structures/constants";
import Content from "@/components/pages/about-us/structures/conglomerate-chart/Content";

export async function generateMetadata() {
  return {
    title: "Conglomerate Chart",
    description: "Conglomerate Chart",
  };
}

const ConglomerateChartPage = () => {
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.conglomerateChart;
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

export default ConglomerateChartPage;
