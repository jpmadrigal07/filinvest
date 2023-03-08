import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/property-search/Content";

export async function generateMetadata() {
  return {
    title: "Property Search",
    description: "Property Search",
  };
}

const PropertySearchPage = async () => {
  return (
    <>
      <MainHeader
        title="Property Search"
        bgUrl="office-parks.png"
        bgUrlSmall="office-parks-small.png"
      />
      <Content />
    </>
  );
};

export default PropertySearchPage;
