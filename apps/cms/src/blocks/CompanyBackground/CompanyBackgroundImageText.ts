import { Block } from "payload/types";

const CompanyBackgroundImageText: Block = {
  slug: "company-background-image-and-text",
  fields: [
    {
      name: "videoCover", // required
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
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "array",
      name: "description",
      label: "Description",
      minRows: 1,
      required: true,
      fields: [
        {
          name: "description",
          label: "Description Paragraph",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};

export default CompanyBackgroundImageText;
