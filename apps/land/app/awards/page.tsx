import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/awards/Content";
import { getRequest } from "@/helpers/getRequest";
import { metaBuilder } from "@/helpers/metaBuilder";
import { getPageContent } from "../page";

const AWARDS_PAGE_ID = "639a5808b60dc36e6fc86d30";

export async function generateMetadata() {
  const content = await getPageContent(AWARDS_PAGE_ID);
  return metaBuilder(content);
}

const AwardsPage = async () => {
  const content = await getPageContent(AWARDS_PAGE_ID);
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
      <div className="px-16 py-24">
        <PageNextPrevButton content={content} />
      </div>
    </>
  );
};

export default AwardsPage;
