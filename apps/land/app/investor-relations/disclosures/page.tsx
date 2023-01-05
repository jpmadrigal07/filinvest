import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/constants";
import Content from "@/components/pages/investor-relations/disclosures/Content";

const DisclosuresPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.disclosures;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default DisclosuresPage;
