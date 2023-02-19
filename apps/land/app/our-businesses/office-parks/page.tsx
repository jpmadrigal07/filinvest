import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/offices/constants";
import Content from "@/components/pages/our-businesses/office-parks/Content";
import OfficeParks from "@/components/pages/our-businesses/office-parks/OfficeParks";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const OfficeParksPage = async () => {
  const content = await getPageContent("63f1cbdffa79c21ee7bb5cd5");
  const { title, breadcrumbs, image } = HEADER_INFO.officeParks;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <OfficeParks content={content} />
    </>
  );
};

export default OfficeParksPage;
