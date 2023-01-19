import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/property-search/Content";

type PageProps = {
  searchParams: {
    propertyType: string;
    location: string;
    unitSize: string;
    priceRangeFrom: string;
    priceRangeTo: string;
  };
};

const PropertySearchPage = ({ searchParams }: PageProps) => {
  return (
    <>
      <MainHeader title="Property Search" bgUrl="office-parks.png" />
      <Content searchParams={searchParams} />
    </>
  );
};

export default PropertySearchPage;
