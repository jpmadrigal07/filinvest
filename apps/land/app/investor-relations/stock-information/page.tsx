import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/investor-relations/share-information/Content";
import { HEADER_INFO } from "@/components/pages/investor-relations/constants";

export async function generateMetadata() {
  return {
    title: "Share Information",
    description: "Share Information",
  };
}

const ShareInformationPage = () => {
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.stockInformation;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <Content />
    </>
  );
};

export default ShareInformationPage;
