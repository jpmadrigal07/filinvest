import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/our-leadership/constants";
import BoardOfDirectors from "@/components/pages/about-us/our-leadership/board-of-directors/BoardOfDirectors";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const BoardOfDirectorsPage = async () => {
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.boardOfDirectors;
  const content = await getPageContent("63f8749ef85c32e4e1eefb59");
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <BoardOfDirectors content={content} />
    </>
  );
};

export default BoardOfDirectorsPage;
