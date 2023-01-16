import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/malls/Content";

const OfficeParksPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.malls;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default OfficeParksPage;
