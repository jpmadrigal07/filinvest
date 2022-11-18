import MainHeader from "../../../components/header/MainHeader";
import Content from "../../../components/pages/investor-relations/dividend-policy/Content";
import { HEADER_INFO } from "../../../components/pages/investor-relations/constants";

const DividendPolicyPage = () => {
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.dividendPolicy;
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

export default DividendPolicyPage;
