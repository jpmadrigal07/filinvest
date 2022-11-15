import MainHeader from "../../../components/header/MainHeader";
import Tabs from "../../../components/header/Tabs";
import Content from "../../../components/pages/investor-relations/dividend-policy/Content";

const DividendPolicyPage = () => {
  const tabItems = [
    {
      title: "Share Information",
      link: "/investor-relations/share-information",
    },
    {
      title: "Dividend History",
      link: "/investor-relations/dividend-history",
    },
    {
      title: "Dividend Policy",
      link: "/investor-relations/dividend-policy",
    },
  ];
  return (
    <>
      <MainHeader
        title="Dividend Policy"
        breadcrumbs="Home / Investor Relations / Dividend Policy"
        bgUrl="dividend-history.png"
        tabs={<Tabs items={tabItems} />}
      />
      <Content />
    </>
  );
};

export default DividendPolicyPage;
