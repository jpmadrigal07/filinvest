import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrHasSiteAccessOrPublished } from "../access/isAdminHasSiteAccessOrPublished";
import { isAdminOrHasSiteAccess } from "../access/isAdminOrHasSiteAccess";
import { isLoggedIn } from "../access/isLoggedIn";

export const Projects: CollectionConfig = {
  slug: "projects",
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
    read: isAdminOrHasSiteAccessOrPublished,
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
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "headerImage",
      label: "Header Image (Size: 1922x656)",
      type: "upload",
      relationTo: "files",
      required: true,
    },
    {
      name: "logo",
      label: "Logo (Height: 100px)",
      type: "upload",
      relationTo: "files",
      required: true,
    },
    {
      name: "projectType",
      type: "relationship",
      relationTo: "project-categories",
      required: true,
    },
    {
      name: "propertyType",
      type: "relationship",
      relationTo: "property-categories",
      required: false,
    },
    {
      name: "location",
      type: "relationship",
      relationTo: "location-categories",
      required: true,
    },
    {
      name: "size",
      label: "Size (sqm)",
      type: "number",
      required: true,
    },
    {
      name: "coverImage",
      label: "Cover Image (Size: 1920x833)",
      type: "upload",
      relationTo: "files",
      required: true,
    },
    {
      name: "shortDescription",
      type: "text",
      required: true,
    },
    {
      name: "overview",
      type: "richText",
      required: true,
    },
    {
      name: "locationTab",
      type: "richText",
      required: true,
    },
    {
      name: "mapImage",
      type: "upload",
      relationTo: "files",
      required: true,
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
