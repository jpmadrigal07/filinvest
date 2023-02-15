import { Block } from "payload/types";

const EnterpriseRiskManagementTable: Block = {
  slug: "enterprise-risk-management-table",
  fields: [
    {
      type: "array",
      name: "tableHeader",
      required: true,
      maxRows: 1,
      fields: [
        {
          type: "text",
          name: "header",
          required: true,
        },
        {
          type: "array",
          name: "tableData",
          required: true,
          fields: [
            {
              type: "textarea",
              name: "data",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default EnterpriseRiskManagementTable;
