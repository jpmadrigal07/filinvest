import { GlobalConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import link from "../fields/link";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: "mainMenu",
      type: "array",
      fields: [
        link({
          appearances: false,
        }),
        {
          name: "firstFeaturedSlug",
          type: "relationship",
          relationTo: ["news", "projects", "awards"],
        },
        {
          name: "secondFeaturedSlug",
          type: "relationship",
          relationTo: ["news", "projects", "awards"],
        },
        {
          name: "subMenu",
          type: "array",
          fields: [
            link({
              appearances: false,
            }),
            {
              name: "featured",
              type: "relationship",
              relationTo: ["news", "projects", "awards"],
            },
          ],
        },
      ],
    },
    {
      name: "callToActionText",
      type: "text",
      required: true,
    },
    {
      name: "callToActionLink",
      type: "text",
      required: true,
    },
  ],
};
