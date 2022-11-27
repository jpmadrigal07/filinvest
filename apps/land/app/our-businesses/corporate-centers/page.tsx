import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/corporate-centers/Content";

const CorporateCentersPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.corporateCenters;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default CorporateCentersPage;
