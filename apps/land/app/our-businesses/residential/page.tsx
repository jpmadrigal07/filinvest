import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/residential/Content";
import flattenLocations from "@/helpers/flattenLocations";
import { getRequest } from "@/helpers/getRequest";
import { PropertyCategory } from "shared-types";

const ResidentialPage = async () => {
  const { title, breadcrumbs, image } = HEADER_INFO.residential;
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
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content locations={locations} propertyTypes={propertyTypes} />
    </>
  );
};

export default ResidentialPage;
