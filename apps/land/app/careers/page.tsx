import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/careers/constants";
import Content from "@/components/pages/careers/Content";

export async function generateMetadata() {
  return {
    title: "Careers",
    description: "Careers",
  };
}

const CareersPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.careers;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default CareersPage;
