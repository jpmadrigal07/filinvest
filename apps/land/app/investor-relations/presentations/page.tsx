import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/investor-relations/presentations/Content";

export async function generateMetadata() {
  return {
    title: "Presentations",
    description: "Presentations",
  };
}

const PresentationPage = () => {
  return (
    <>
      <MainHeader
        title="Presentations"
        breadcrumbs="Home / Investor Relations / Presentations"
        bgUrl="presentations.png"
      />
      <Content />
    </>
  );
};

export default PresentationPage;
