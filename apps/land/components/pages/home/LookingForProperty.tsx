import React from "react";
import PropertySearch from "@/components/search/PropertySearch";
import flattenLocations from "@/helpers/flattenLocations";
import { getRequest } from "@/helpers/getRequest";
import { PropertyCategory } from "shared-types";

const LookingForProperty = async () => {
  const propertyTypesRes: PropertyCategory[] = await getRequest(
    "/api/property-categories"
  );
  const locationsRes = await getRequest("/api/location-categories?limit=20");
  const propertyTypes = propertyTypesRes.map(
    (propertyType) => propertyType.title
  );
  const locations = flattenLocations(locationsRes);
  return (
    <section className="mx-6 pt-28 lg:mx-0">
      <h2 className="text-jet mt-2 text-center text-4xl font-extrabold">
        Looking for a Property?
      </h2>
      <h4 className="text-dim-gray mt-4 text-center">
        Find your dream residential, commercial, co-living, or industrial
        properties with our smart search tool.
      </h4>
      <PropertySearch locations={locations} propertyTypes={propertyTypes} />
    </section>
  );
};

export default LookingForProperty;
