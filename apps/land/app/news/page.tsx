import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/news/Content";

const NewsPage = () => {
  return (
    <>
      <MainHeader
        title="Latest on Filinvest Land"
        isBlueHeader
        bgUrl="blue-header-bg.png"
      />
      <Content />
    </>
  );
};

export default NewsPage;
