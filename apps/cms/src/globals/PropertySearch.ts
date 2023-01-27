import { GlobalConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";

export const PropertySearch: GlobalConfig = {
  slug: "property-search",
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      label: "priceRange",
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
  ],
};
