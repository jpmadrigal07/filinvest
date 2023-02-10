import { SubLocationSettings } from "shared-types";

const flattenSubLocations = (subLocations: SubLocationSettings[]) => {
  return subLocations
    ? subLocations?.map(
        (subLocation: SubLocationSettings) =>
          subLocation.subLocation.reference.value.title
      )
    : [];
};

export default flattenSubLocations;
