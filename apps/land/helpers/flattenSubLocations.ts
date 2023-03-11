import { SubLocationSettings } from "shared-types";

const flattenSubLocations = (subLocations: SubLocationSettings[]) => {
  const subLocationTitles = Object.values(subLocations).map((location) => {
    return location.location?.map((item) => {
      const value = item.location.reference.value;
      return {
        mainLocation: value.title,
        subLocations: value.subLocation?.map((sub) => {
          return {
            title: sub.title,
          };
        }),
      };
    });
  });

  return subLocationTitles;

  // return subLocations
  //   ? subLocations?.map(
  //       (subLocation: SubLocationSettings) =>
  //         subLocation.subLocation.reference.value.title
  //     )
  //   : [];
};

export default flattenSubLocations;
