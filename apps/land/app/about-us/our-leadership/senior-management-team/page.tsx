import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/our-leadership/constants";
import Content from "@/components/pages/about-us/our-leadership/senior-management-team/Content";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const SeniorManagementTeamPage = async () => {
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.seniorManagementTeam;
  const content = await getPageContent("63ecc2d7e742304b009f117f");
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        tabs={tabs}
      />
      <Content content={content} />
    </>
  );
};

export default SeniorManagementTeamPage;
