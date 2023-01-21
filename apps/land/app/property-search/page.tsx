import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/property-search/Content";
import flattenLocations from "@/helpers/flattenLocations";
import { getRequest } from "@/helpers/getRequest";
import { PropertyCategory } from "shared-types";

const PropertySearchPage = async () => {
  const propertyTypesRes: PropertyCategory[] = await getRequest(
    "/api/property-categories"
  );
  const locationsRes = await getRequest("/api/location-categories?limit=30");
  const propertyTypes = propertyTypesRes.map(
    (propertyType) => propertyType.title
  );
  const locations = flattenLocations(locationsRes);
  return (
    <>
      <MainHeader title="Property Search" bgUrl="office-parks.png" />
      <Content locations={locations} propertyTypes={propertyTypes} />
    </>
  );
};

export default PropertySearchPage;
