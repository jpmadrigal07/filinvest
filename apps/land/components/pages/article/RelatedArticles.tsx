import React from "react";
import NewsTileList from "../news/NewsTileList";

async function getRelatedNews() {
  const res = await fetch(`${process.env.CMS_API_URL}/api/news`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await res.json();
  return jsonData.docs ? jsonData.docs : null;
}

const RelatedArticles = async () => {
  const news = await getRelatedNews();
  return (
    <>
      <div className="mt-24 flex w-full items-center gap-8">
        <h3 className="text-jet flex-none text-4xl font-bold">
          Related Articles
        </h3>
        <hr className="w-full flex-1" />
      </div>
      <NewsTileList news={news} className="mb-24" />
    </>
  );
};

export default RelatedArticles;
