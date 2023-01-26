import { Block } from "payload/types";

const HomeHeroSection: Block = {
  slug: "homeHeroSection",
  fields: [
    {
      name: "mediaBackground", // required
      type: "upload", // required
      relationTo: "files", // required
      required: true,
      access: {
        read: () => true,
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      label: "Prestige",
      type: "row",
      fields: [
        {
          name: "prestigeImage", // required
          type: "upload", // required
          relationTo: "files", // required
          required: true,
          access: {
            read: () => true,
          },
        },
        {
          name: "prestigeLogo", // required
          type: "upload", // required
          relationTo: "files", // required
          required: true,
          access: {
            read: () => true,
          },
        },
      ],
    },
    {
      label: "Futura",
      type: "row",
      fields: [
        {
          name: "futuraImage", // required
          type: "upload", // required
          relationTo: "files", // required
          required: true,
          access: {
            read: () => true,
          },
        },
        {
          name: "futuraLogo", // required
          type: "upload", // required
          relationTo: "files", // required
          required: true,
          access: {
            read: () => true,
          },
        },
      ],
    },
    {
      label: "Aspire",
      type: "row",
      fields: [
        {
          name: "aspireImage", // required
          type: "upload", // required
          relationTo: "files", // required
          required: true,
          access: {
            read: () => true,
          },
        },
        {
          name: "aspireLogo", // required
          type: "upload", // required
          relationTo: "files", // required
          required: true,
          access: {
            read: () => true,
          },
        },
      ],
    },
  ],
};

export default HomeHeroSection;
