import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/constants";
import Content from "@/components/pages/about-us/mission-vision/Content";

const MissionVisionPage = () => {
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.missionVision;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
        tabs={tabs}
      />
      <Content />
    </>
  );
};

export default MissionVisionPage;
