import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/news/Content";
import { CACHE_REVALIDATE } from "@/helpers/constants";
import { getRequest } from "@/helpers/getRequest";
async function getNews() {
  const res = await fetch(`${process.env.CMS_URL}/api/news`, {
    next: { revalidate: CACHE_REVALIDATE },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await res.json();
  return jsonData.docs ? jsonData.docs : null;
}

export const metadata = {
  title: "News",
  description: "News",
};

const NewsPage = async () => {
  const news = await getNews();
  const categories = await getRequest(`/api/project-categories`);
  return (
    <>
      <MainHeader
        title="Latest on Filinvest Land"
        isBlueHeader
        bgUrl="blue-header-bg.png"
        isTitleSmall
      />
      <Content news={news} categories={categories} />
    </>
  );
};

export default NewsPage;
