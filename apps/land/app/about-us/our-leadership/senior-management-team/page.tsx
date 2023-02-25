import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/our-leadership/constants";
import Content from "@/components/pages/about-us/our-leadership/senior-management-team/Content";

export async function generateMetadata() {
  return {
    title: "Senior Management Team",
    description: "Senior Management Team",
  };
}

const SeniorManagementTeamPage = () => {
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.seniorManagementTeam;
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

export default SeniorManagementTeamPage;
