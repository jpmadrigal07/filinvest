import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import AspireHomes from "@/components/pages/our-businesses/residential/AspireHomes";
import Content from "@/components/pages/our-businesses/residential/Content";
import FuturaHomes from "@/components/pages/our-businesses/residential/FuturaHomes";
import PrestigeHomes from "@/components/pages/our-businesses/residential/PrestigeHomes";
import TitleText from "@/components/pages/our-businesses/residential/TitleText";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ResidentialPage = async () => {
  const content = await getPageContent("63f1b2db7965949aabaa9dd9");
  const { title, breadcrumbs, image } = HEADER_INFO.residential;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <TitleText content={content} />
      <PrestigeHomes content={content} />
      <AspireHomes content={content} />
      <FuturaHomes content={content} />
      {/* <Content /> */}
    </>
  );
};

export default ResidentialPage;
