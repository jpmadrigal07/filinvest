import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/property-search/Content";

export async function generateMetadata() {
  return {
    title: "Property Search",
    description: "Property Search",
  };
}

const PropertySearchPage = async () => {
  /*  const paramList = params?.params?.map((param: string) =>
    decodeURIComponent(param)
  ); / */
  return (
    <>
      <MainHeader
        title="Property Search"
        bgUrl="office-parks.png"
        bgUrlSmall="office-parks-small.png"
      />
      <Content /* urlParams={paramList} */ />
    </>
  );
};

export default PropertySearchPage;
