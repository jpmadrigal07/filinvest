import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/our-leadership/constants";
import Content from "@/components/pages/about-us/our-leadership/board-of-directors/Content";

export async function generateMetadata() {
  return {
    title: "Board Of Directors",
    description: "Board Of Directors",
  };
}

const BoardOfDirectorsPage = () => {
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.boardOfDirectors;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <Content />
    </>
  );
};

export default BoardOfDirectorsPage;
