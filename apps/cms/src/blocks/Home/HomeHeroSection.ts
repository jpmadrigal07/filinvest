import { Block } from "payload/types";

const HomeHeroSection: Block = {
  slug: "homeHeroSection",
  fields: [
    {
      name: "backgroundType", // required
      label: "Use for background",
      type: "radio", // required
      options: [
        // required
        {
          label: "Image",
          value: "image",
        },
        {
          label: "Video",
          value: "video",
        },
        {
          label: "YouTube",
          value: "youtube",
        },
      ],
      defaultValue: "image", // The first value in options.
      admin: {
        layout: "horizontal",
      },
    },
    {
      name: "mediaBackground", // required
      label: "Image Background",
      type: "upload", // required
      relationTo: "files", // required
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
      access: {
        read: () => true,
      },
    },
    {
      name: "videoBackground", // required
      type: "upload", // required
      relationTo: "files", // required
      filterOptions: {
        mimeType: { contains: "video" },
      },
      access: {
        read: () => true,
      },
    },
    {
      name: "youtubeBackground",
      label:
        "YouTube Video Background (i.e. https://www.youtube.com/watch?v=lQ6Yrf_5EOw)",
      type: "text",
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
