import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/co-living/Content";

const CoLivingPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.coliving;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default CoLivingPage;
