import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/our-leadership/constants";
import Content from "@/components/pages/about-us/our-leadership/board-of-directors/Content";
import { Breadcrumb } from "react-bootstrap";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const BoardOfDirectorsPage = async () => {
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.boardOfDirectors;
  const content = await getPageContent("639a5874b60dc36e6fc86dde");
  const flattenBreadcrumbs = content.content[0].breadcrumbs.map(
    (breadcrumb: any) => {
      return { title: breadcrumb.link.label, link: breadcrumb.link };
    }
  );
  console.log(content.content[0].breadcrumbs.link);
  return (
    <>
      <MainHeader
        content={content}
        title={content.content[0].title}
        breadcrumbs={flattenBreadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <Content content={content} />
    </>
  );
};

export default BoardOfDirectorsPage;
