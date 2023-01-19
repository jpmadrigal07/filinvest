import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/property-search/Content";
import { T_SearchQuery } from "@/types/global";

type PageProps = {
  searchParams: T_SearchQuery;
};

const PropertySearchPage = async ({ searchParams }: PageProps) => {
  return (
    <>
      <MainHeader title="Property Search" bgUrl="office-parks.png" />
      {/* @ts-expect-error */}
      <Content searchParams={searchParams} />
    </>
  );
};

export default PropertySearchPage;
