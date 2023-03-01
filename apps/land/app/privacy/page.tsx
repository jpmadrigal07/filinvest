import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/privacy-policy/Content";

export async function generateMetadata() {
  return {
    title: "Privacy",
    description: "Privacy",
  };
}

const PrivacyPage = () => {
  return (
    <>
      <MainHeader title="Privacy Policy" isBlueHeader={true} />
      <Content />
    </>
  );
};

export default PrivacyPage;
