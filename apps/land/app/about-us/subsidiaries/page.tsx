import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/about-us/subsidiaries/Content";
import { HEADER_INFO } from "@/components/pages/about-us/constants";

export async function generateMetadata() {
  return {
    title: "Subsidiaries",
    description: "Subsidiaries",
  };
}

const Subsidiaries = () => {
  const { title, breadcrumbs, image, imageSmall } = HEADER_INFO.subsidiaries;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
      />
      <Content />
    </>
  );
};

export default Subsidiaries;
