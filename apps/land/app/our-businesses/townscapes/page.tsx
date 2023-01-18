import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/townscapes/Content";

const TownscapesPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.townscapes;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default TownscapesPage;