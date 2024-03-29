import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrHasSiteAccess } from "../access/isAdminOrHasSiteAccess";
import { isLoggedIn } from "../access/isLoggedIn";
import { slugField } from "../fields/slug";

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
    read: () => true,
    // Only admins can delete
    delete: isAdmin,
  },
  fields: [
    {
      name: "dataType",
      type: "select",
      defaultValue: "regular",
      hasMany: false,
      options: [
        {
          label: "Regular",
          value: "regular",
        },
        {
          label: "Office",
          value: "office",
        },
        {
          label: "Office Park",
          value: "office park",
        },
        {
          label: "Corporate Center",
          value: "corporate center",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    slugField(),
    {
      name: "headerImage",
      label: "Header Image (Size: 1922x656)",
      type: "upload",
      relationTo: "files",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType !== "office park",
      },
    },
    {
      name: "logo",
      label: "Logo (Height: 100px)",
      type: "upload",
      relationTo: "files",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType !== "office park",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "numberOfStaffRoom",
          type: "number",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
        {
          name: "numberOfBathrooms",
          type: "number",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
      ],
    },
    {
      name: "numberOfBedrooms",
      type: "number",
      admin: {
        condition: (_, siblingsData) =>
          siblingsData.dataType === "regular" ||
          siblingsData.dataType === "corporate center",
      },
    },
    {
      name: "address1",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "address2",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "floor",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "wall",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "ceiling",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "heightClearance",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "VRF",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "elevator",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "telephone",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "powerInput",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "powerOutput",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "people",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        condition: (_, siblingsData) =>
          siblingsData.dataType === "office" ||
          siblingsData.dataType === "office park",
      },
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
      admin: {
        condition: (_, siblingsData) =>
          siblingsData.dataType === "regular" ||
          siblingsData.dataType === "corporate center",
      },
    },
    {
      name: "size",
      label: "Size (sqm)",
      type: "number",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType !== "office park",
      },
    },
    {
      name: "coverImage",
      label: "Cover Image (Size: 1920x833)",
      type: "upload",
      relationTo: "files",
      required: true,
    },
    {
      type: "array",
      name: "imageGallery",
      label: "Image Gallery",
      fields: [
        {
          name: "image",
          label: "Image (Size: 1920x833)",
          type: "upload",
          relationTo: "files",
        },
      ],
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType !== "office park",
      },
    },
    {
      name: "shortDescription",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType !== "office park",
      },
    },
    {
      name: "sustainabilityFeatureTitle",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office park",
      },
    },
    {
      name: "sustainabilityFeatureDescription",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office park",
      },
    },
    {
      type: "array",
      name: "sustainabilityFeatureItemLists",
      minRows: 1,
      required: true,
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
        },
      ],
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office park",
      },
    },
    {
      type: "array",
      name: "sustainabilityFeatureTitleDescription",
      minRows: 1,
      required: true,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "text",
          required: true,
        },
      ],
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office park",
      },
    },
    {
      type: "array",
      name: "amenitiesTitleDescription",
      minRows: 1,
      required: true,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "text",
        },
      ],
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office park",
      },
    },
    {
      name: "locationDescription",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office park",
      },
    },
    {
      type: "array",
      name: "locationItemLists",
      minRows: 1,
      required: true,
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
        },
      ],
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType === "office park",
      },
    },
    {
      name: "overview",
      type: "richText",
      required: true,
      admin: {
        condition: (_, siblingsData) =>
          siblingsData.dataType === "regular" ||
          siblingsData.dataType === "corporate center",
      },
    },
    {
      name: "locationTab",
      type: "richText",
      required: true,
      admin: {
        condition: (_, siblingsData) =>
          siblingsData.dataType === "regular" ||
          siblingsData.dataType === "corporate center",
      },
    },
    {
      name: "location",
      type: "relationship",
      relationTo: "location-categories",
      required: true,
    },
    {
      name: "locationGroup",
      type: "relationship",
      relationTo: "location-group-categories",
      required: true,
    },
    {
      name: "subLocationTwo",
      label: "Sub Location",
      type: "relationship",
      relationTo: "sub-location-categories",
    },
    {
      name: "status",
      type: "relationship",
      relationTo: "project-status-categories",
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType !== "office park",
      },
    },
    {
      name: "mapImage",
      type: "upload",
      relationTo: "files",
      required: true,
      admin: {
        condition: (_, siblingsData) => siblingsData.dataType !== "office park",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "managerName",
          type: "text",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
        {
          name: "managerPhoto",
          type: "upload",
          relationTo: "files",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "managerPhone",
          type: "text",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
        {
          name: "managerEmail",
          type: "text",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "managerFacebookLink",
          type: "text",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
        {
          name: "managerLinkedinLink",
          type: "text",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "relatedOffice1",
          label: "Related Office 1",
          type: "relationship",
          relationTo: "projects",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
        {
          name: "relatedOffice2",
          label: "Related Office 2",
          type: "relationship",
          relationTo: "projects",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
        {
          name: "relatedOffice3",
          label: "Related Office 3",
          type: "relationship",
          relationTo: "projects",
          required: true,
          admin: {
            condition: (_, siblingsData) => siblingsData.dataType === "office",
          },
        },
      ],
    },
    {
      name: "site",
      type: "relationship",
      relationTo: "sites",
      required: true,
      admin: {
        position: "sidebar",
      },
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
