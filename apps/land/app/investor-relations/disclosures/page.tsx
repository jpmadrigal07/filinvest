import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/constants";
import Content from "@/components/pages/investor-relations/disclosures/Content";

export async function generateMetadata() {
  return {
    title: "Disclosures",
    description: "Disclosures",
  };
}

const DisclosuresPage = () => {
  const { title, breadcrumbs, image, imageSmall } = HEADER_INFO.disclosures;
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

export default DisclosuresPage;
