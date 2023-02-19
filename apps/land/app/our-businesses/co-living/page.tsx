import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import TitleText from "./TitleText";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const CoLivingPage = async () => {
  const content = await getPageContent("63f1e1894c33ce3025f5a790");
  const { title, breadcrumbs, image } = HEADER_INFO.coliving;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <TitleText content={content} />
    </>
  );
};

export default CoLivingPage;
