import { Block } from "payload/types";

const HomeInvestorRelationSection: Block = {
  slug: "homeInvestorRelationSection",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subTitle",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "learnMoreLink",
      type: "text",
      required: true,
    },
  ],
};

export default HomeInvestorRelationSection;
