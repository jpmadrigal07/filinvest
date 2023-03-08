import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/investor-relations/corporate-governance/constants";
import Content from "@/components/pages/investor-relations/corporate-governance/board-committees/Content";

export async function generateMetadata() {
  return {
    title: "Board Committees",
    description: "Board Committees",
  };
}

const BoardCommitteesPage = () => {
  const { title, breadcrumbs, image, tabs } = HEADER_INFO.boardCommittees;
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

export default BoardCommitteesPage;
