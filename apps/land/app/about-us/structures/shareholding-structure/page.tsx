import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/structures/constants";
import Content from "@/components/pages/about-us/structures/shareholding-structure/Content";

export async function generateMetadata() {
  return {
    title: "Shareholding Structure",
    description: "Shareholding Structure",
  };
}

const ShareholdingStructurePage = () => {
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.shareholdingStructure;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
        tabs={tabs}
      />
      <Content />
    </>
  );
};

export default ShareholdingStructurePage;
