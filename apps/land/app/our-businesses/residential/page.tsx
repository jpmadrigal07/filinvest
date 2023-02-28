import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/residential/Content";

export async function generateMetadata() {
  return {
    title: "Residential",
    description: "Residential",
  };
}

const ResidentialPage = async () => {
  const { title, breadcrumbs, image } = HEADER_INFO.residential;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default ResidentialPage;
