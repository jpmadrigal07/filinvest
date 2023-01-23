import { GlobalConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import link from "../fields/link";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: "filinvestLogo",
      type: "upload",
      relationTo: "files",
      required: true,
    },
    {
      name: "emailDescription",
      type: "text",
      required: true,
    },
    {
      name: "quickLinks",
      type: "array",
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: "filinvestLand",
      type: "array",
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: "firstPhone",
      type: "text",
      required: true,
    },
    {
      name: "secondPhone",
      type: "text",
      required: true,
    },
    {
      name: "emailAddress",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "text",
      required: true,
    },
    {
      name: "copyrightText",
      type: "text",
      required: true,
    },
    {
      name: "bottomRightLinks",
      type: "array",
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: "facebookLink",
      type: "text",
      required: false,
    },
    {
      name: "linkedInLink",
      type: "text",
      required: false,
    },
    {
      name: "twitterLink",
      type: "text",
      required: false,
    },
  ],
};
