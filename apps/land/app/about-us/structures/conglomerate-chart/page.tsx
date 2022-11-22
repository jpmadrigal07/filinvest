import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/structures/constants";
import Content from "@/components/pages/about-us/structures/conglomerate-chart/Content";

const ConglomerateChartPage = () => {
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.conglomerateChart;
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

export default ConglomerateChartPage;
