import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/corporate-social-responsibility/Content";

const CompanyPoliciesPage = () => {
  const { title, breadcrumbs, image, tabs } =
    HEADER_INFO.corporateSocialResponsibility;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <Content />
    </>
  );
};

export default CompanyPoliciesPage;