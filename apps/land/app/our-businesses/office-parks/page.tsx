import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/offices/constants";
import Content from "@/components/pages/our-businesses/office-parks/Content";

export async function generateMetadata() {
  return {
    title: "Office Parks",
    description: "Office Parks",
  };
}

const OfficeParksPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.officeParks;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default OfficeParksPage;
