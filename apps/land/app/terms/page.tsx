import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/terms/Content";

export async function generateMetadata() {
  return {
    title: "Terms",
    description: "Terms",
  };
}

const TermsPage = () => {
  return (
    <>
      <MainHeader title="Terms & Condition" isBlueHeader={true} />
      <Content />
    </>
  );
};

export default TermsPage;
