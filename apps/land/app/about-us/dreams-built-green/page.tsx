import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/about-us/dreams-built-green/Content";
import { HEADER_INFO } from "@/components/pages/about-us/constants";
import IconText from "@/components/pages/about-us/dreams-built-green/IconText";
import TitleText from "@/components/pages/about-us/dreams-built-green/TitleText";
import MediaSection from "@/components/pages/about-us/dreams-built-green/MediaSection";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata() {
  return {
    title: "Dreams Built Green",
    description: "Dreams Built Green",
  };
}

const DreamsBuiltGreen = async () => {
  const content = await getPageContent("639a5859b60dc36e6fc86daa");
  const { title, breadcrumbs, image, imageSmall } =
    HEADER_INFO.dreamsBuiltGreen;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
      />
      <IconText content={content} />
      <TitleText content={content} />
      <MediaSection content={content} />
    </>
  );
};

export default DreamsBuiltGreen;
