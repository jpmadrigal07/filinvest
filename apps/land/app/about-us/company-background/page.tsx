import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/constants";
import Content from "@/components/pages/about-us/company-background/Content";

const CompanyBackgroundPage = () => {
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.companyBackground;
  return (
    <div>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
        tabs={tabs}
      />
      <Content />
    </div>
  );
};

export default CompanyBackgroundPage;
