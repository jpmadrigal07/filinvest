import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";

export const Menu: CollectionConfig = {
  slug: "menu",
  admin: {
    group: "Other",
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
      name: "owner", // required
      type: "relationship", // required
      relationTo: "users", // required
      hasMany: false,
      // admin: {
      //   isSortable: true,
      // }
    },
  ],
};
