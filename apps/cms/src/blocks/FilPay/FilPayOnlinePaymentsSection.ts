import { Block } from "payload/types";

const FilPayOnlinePaymentsSection: Block = {
  slug: "filpay-online-payments-section",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "array",
      name: "filpayAdvantages",
      required: true,
      minRows: 3,
      fields: [
        {
          type: "upload",
          name: "icon",
          relationTo: "files",
          required: true,
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
      ],
    },
    {
      name: "text",
      type: "textarea",
      required: true,
    },
    {
      type: "array",
      name: "filpayIternationalPaymentMethodsIcons",
      required: true,
      fields: [
        {
          type: "upload",
          name: "icon",
          relationTo: "files",
          required: true,
        },
      ],
    },
    {
      type: "array",
      name: "filpayLocalPaymentMethodsIcons",
      required: true,
      fields: [
        {
          type: "upload",
          name: "icon",
          relationTo: "files",
          required: true,
        },
      ],
    },
    {
      name: "learnMoreLink",
      type: "text",
      required: true,
    },
  ],
};

export default FilPayOnlinePaymentsSection;
