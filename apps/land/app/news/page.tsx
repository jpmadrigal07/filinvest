import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/news/Content";

async function getNews() {
  const res = await fetch(`${process.env.CMS_URL}/api/news`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await res.json();
  return jsonData.docs ? jsonData.docs : null;
}

const NewsPage = async () => {
  const news = await getNews();
  return (
    <>
      <MainHeader
        title="Latest on Filinvest Land"
        isBlueHeader
        bgUrl="blue-header-bg.png"
        isTitleSmall
      />
      <Content news={news} />
    </>
  );
};

export default NewsPage;
