import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/news/Content";
import qs from "qs";

const query = {
  "site.title": {
    equals: "Land",
  },
};

const stringifiedQuery = qs.stringify(
  {
    where: query, // ensure that `qs` adds the `where` property, too!
  },
  { addQueryPrefix: true }
);

async function getNews() {
  const res = await fetch(`http://localhost:9000/api/news${stringifiedQuery}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const NewsPage = async () => {
  const news = await getNews();
  return (
    <>
      <MainHeader
        title="Latest on Filinvest Land"
        isBlueHeader
        bgUrl="blue-header-bg.png"
      />
      <Content news={news} />
    </>
  );
};

export default NewsPage;
