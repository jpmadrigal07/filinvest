import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/structures/constants";
import Content from "@/components/pages/about-us/structures/organizational-chart/Content";

const OrganizationalChartPage = () => {
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.organizationalChart;
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

export default OrganizationalChartPage;
