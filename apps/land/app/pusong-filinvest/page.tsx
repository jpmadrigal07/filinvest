import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/pusong-filinvest/constants";
import Content from "@/components/pages/pusong-filinvest/Content";

const PusongFilinvestPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.pusongFilinvest;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default PusongFilinvestPage;
