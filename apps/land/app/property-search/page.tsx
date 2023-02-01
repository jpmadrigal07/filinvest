import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/property-search/Content";

const PropertySearchPage = async () => {
  return (
    <>
      <MainHeader title="Property Search" bgUrl="office-parks.png" />
      <Content />
    </>
  );
};

export default PropertySearchPage;
