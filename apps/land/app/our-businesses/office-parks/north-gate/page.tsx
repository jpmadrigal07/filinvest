import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/our-businesses/office-parks/north-gate/Content";

export async function generateMetadata() {
  return {
    title: "North Gates",
    description: "North Gates",
  };
}

const OfficeParksPage = () => {
  return (
    <>
      <MainHeader isBlueHeader bgUrl="blue-header-bg-2.png" />
      <Content />
    </>
  );
};

export default OfficeParksPage;
