import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/about-us/subsidiaries/Content";
import { HEADER_INFO } from "@/components/pages/about-us/constants";
import SubsidiariesSection from "@/components/pages/about-us/subsidiaries/SubsidiariesSection";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Subsidiaries = async () => {
  const content = await getPageContent("639a5888b60dc36e6fc86e12");
  const { title, breadcrumbs, image, imageSmall } = HEADER_INFO.subsidiaries;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
      />
      {/* <Content /> */}
      <SubsidiariesSection content={content} />
    </>
  );
};

export default Subsidiaries;
