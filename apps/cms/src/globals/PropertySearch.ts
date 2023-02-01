import { GlobalConfig } from "payload/types";
import location from "../fields/location";
import propertyType from "../fields/propertyType";

export const PropertySearch: GlobalConfig = {
  slug: "property-search",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "minimumPriceRange",
          type: "number",
          required: true,
        },
        {
          name: "maximumPriceRangeTo",
          type: "number",
          required: true,
        },
      ],
    },
    {
      name: "locations",
      type: "array",
      fields: [
        location({
          label: "Location Group",
          relationTo: "location-group-categories",
          fieldName: "locationGroup",
        }),
        {
          name: "location",
          type: "array",
          fields: [
            location({
              label: "Location",
              relationTo: "location-categories",
              fieldName: "location",
            }),
          ],
        },
      ],
    },
    {
      name: "propertyTypes",
      type: "array",
      fields: [propertyType()],
    },
  ],
};
