import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import TitleText from "@/components/pages/our-businesses/mixeduse-estates/TitleText";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const MixeduseEstatesPage = async () => {
  const content = await getPageContent("63f1e2b44c33ce3025f5a813");
  const { title, breadcrumbs, image } = HEADER_INFO.mixedUseEstates;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <TitleText content={content} />
    </>
  );
};

export default MixeduseEstatesPage;
