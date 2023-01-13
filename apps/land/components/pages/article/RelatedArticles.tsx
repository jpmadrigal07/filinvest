import BorderButton from "@/components/button/BorderButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      <div className="cols mb-24 grid grid-cols-3 gap-12">
        {news.map((item: any) => {
          return (
            <div>
              <div className="bg-ghost-white h-[400px]">
                <Image
                  src={item.coverImage.url ? item.coverImage.url : 300}
                  width={item.coverImage.width}
                  height={item.coverImage.height}
                  alt={item.coverImage.alt ? item.coverImage.alt : "No caption"}
                />
              </div>
              <h2 className="text-jet mt-6 text-2xl font-bold">{item.title}</h2>
              <h4 className="text-dim-gray mt-4">
                Mattis molestie a iaculis at erat pellentesque adipiscing
                commodo nunc lobortis mattis.
              </h4>
              <div className="mt-12">
                <Link href={`/article/${item.slug}`}>
                  <BorderButton
                    buttonText="Read More"
                    textColor="dark-cornflower-blue"
                    borderColor="dark-cornflower-blue"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RelatedArticles;
