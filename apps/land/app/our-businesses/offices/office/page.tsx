import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/our-businesses/offices/office/Content";

const OfficePage = () => {
  return (
    <>
      <MainHeader bgUrl="office.png" bgUrlSmall="office.png" />
      <Content projects={[]} />
    </>
  );
};

export default OfficePage;
