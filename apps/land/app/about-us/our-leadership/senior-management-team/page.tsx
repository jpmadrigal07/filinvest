import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/our-leadership/constants";
import SeniorManagementTeam from "@/components/pages/about-us/our-leadership/senior-management-team/SeniorManagementTeam";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata() {
  return {
    title: "Senior Management Team",
    description: "Senior Management Team",
  };
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
      <SeniorManagementTeam content={content} />
    </>
  );
};

export default SeniorManagementTeamPage;
