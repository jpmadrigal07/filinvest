import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/industrial/Content";

const IndustrialPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.industrial;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default IndustrialPage;
