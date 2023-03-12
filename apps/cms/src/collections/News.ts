import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrHasSiteAccess } from "../access/isAdminOrHasSiteAccess";
import { isLoggedIn } from "../access/isLoggedIn";
import { slugField } from "../fields/slug";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    group: "Content",
  },
  versions: {
    drafts: true,
  },
  access: {
    // Anyone logged in can create
    create: isLoggedIn,
    // Only admins or editors with site access can update
    update: isAdminOrHasSiteAccess(),
    // Admins or editors with site access can read,
    // otherwise users not logged in can only read published
    read: () => true,
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
      name: "shortDescription",
      type: "text",
      required: true,
    },
    {
      name: "coverImage", // required
      label: "Cover Image (Size: 1364x663)",
      type: "upload", // required
      relationTo: "files", // required
      required: true,
      access: {
        read: () => true,
      },
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      // If user is not admin, set the site by default
      // to the first site that they have access to
      access: {
        create: ({ req: { user } }) => {
          return user.roles[0] === "admin";
        },
        update: ({ req: { user } }) => {
          return user.roles[0] === "admin";
        },
      },
      defaultValue: ({ user }) => {
        return user.id;
      },
    },
    slugField(),
    {
      name: "projectTypeTag",
      type: "relationship",
      relationTo: "project-categories",
      required: false,
    },
    {
      name: "propertyTypeTag",
      type: "relationship",
      relationTo: "property-categories",
      required: false,
    },
    {
      name: "locationTag",
      type: "relationship",
      relationTo: "location-categories",
      required: false,
    },
    {
      name: "site",
      type: "relationship",
      relationTo: "sites",
      required: true,
      // If user is not admin, set the site by default
      // to the first site that they have access to
      defaultValue: ({ user }) => {
        if (!user.roles.includes("admin") && user.sites?.[0]) {
          return user.sites[0];
        }
      },
    },
  ],
};
