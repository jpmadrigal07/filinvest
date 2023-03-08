import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";

export const LocationCategories: CollectionConfig = {
  slug: "location-categories",
  admin: {
    useAsTitle: "title",
    group: "Category",
  },
  access: {
    // Only admins can create
    create: isAdmin,
    // Only admins or editors with site access can read
    read: () => true,
    // Only admins can update
    update: isAdmin,
    // Only admins can delete
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "locationGroup",
      type: "relationship",
      relationTo: "location-group-categories",
      required: true,
    },
    {
      name: "subLocation",
      type: "relationship",
      relationTo: "sub-location-categories",
      required: true,
      hasMany: true,
    },
  ],
};
