import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/offices/constants";
import Content from "@/components/pages/our-businesses/offices/Content";
import OfficeParks from "@/components/pages/our-businesses/offices/OfficeParks";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const OfficePage = async () => {
  const content = await getPageContent("63f1c8faaf1792ce5d297e9e");
  const { title, breadcrumbs, image } = HEADER_INFO.offices;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <OfficeParks content={content} />
    </>
  );
};

export default OfficePage;
