import { GlobalConfig } from "payload/types";
import location from "../fields/location";
import propertyType from "../fields/propertyType";
import { isAdmin } from "../access/isAdmin";
import subLocation from "../fields/subLocation";

export const PropertySearch: GlobalConfig = {
  slug: "property-search",
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: "pricePoints",
      type: "array",
      fields: [
        {
          name: "point",
          type: "number",
          required: true,
        },
      ],
    },
    {
      name: "unitSizes",
      type: "array",
      fields: [
        {
          name: "sizeFrom",
          type: "number",
          required: true,
        },
        {
          name: "sizeTo",
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
    {
      name: "subLocations",
      type: "array",
      fields: [subLocation()],
    },
    {
      name: "bedroomRange",
      type: "array",
      fields: [
        {
          name: "bedroomFrom",
          type: "number",
          required: true,
        },
        {
          name: "bedroomTo",
          type: "number",
          required: true,
        },
      ],
    },
  ],
};
