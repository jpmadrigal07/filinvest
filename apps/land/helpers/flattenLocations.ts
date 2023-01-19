import { T_Locations } from "@/types/global";
import { LocationCategory } from "shared-types";

const flattenLocations = (locations: LocationCategory[]) => {
  return locations.reduce((acc: T_Locations, obj: LocationCategory) => {
    let accCopy = acc;
    if (
      accCopy &&
      accCopy[obj.locationGroup.title] &&
      accCopy[obj.locationGroup.title].length > 0
    ) {
      accCopy[obj.locationGroup.title].push(obj.title);
    } else {
      accCopy = {
        ...accCopy,
        [obj.locationGroup.title]: [obj.title],
      };
    }
    return accCopy;
  }, {}) as T_Locations;
};

export default flattenLocations;
