import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/townscapes/Content";
import TitleText from "@/components/pages/our-businesses/townscapes/TitleText";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const TownscapesPage = async () => {
  const content = await getPageContent("63f1dc7cfa79c21ee7bb5ec1");
  const { title, breadcrumbs, image } = HEADER_INFO.townscapes;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <TitleText content={content} />
    </>
  );
};

export default TownscapesPage;
