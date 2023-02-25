import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/awards/Content";
import { getRequest } from "@/helpers/getRequest";

export async function generateMetadata() {
  return {
    title: "Awards",
    description: "Awards",
  };
}

const AwardsPage = async () => {
  const awards = await getRequest(`/api/awards`);
  return (
    <>
      <MainHeader
        title="Awards"
        isBlueHeader
        bgUrl="blue-header-bg-2.png"
        isTitleSmall
      />
      <Content awards={awards} />
    </>
  );
};

export default AwardsPage;
