import { T_Locations } from "@/types/global";
import { LocationSettings } from "shared-types";

const flattenLocations = (locations: LocationSettings[]) => {
  return locations
    ? (locations?.reduce((acc: T_Locations, obj: LocationSettings) => {
        let accCopy = acc;
        const subLocations = obj.location?.map(
          (location) => location.location.reference.value.title
        );
        return {
          ...accCopy,
          [obj.locationGroup.reference?.value.title]: subLocations,
        };
      }, {}) as T_Locations)
    : {};
};

export default flattenLocations;
