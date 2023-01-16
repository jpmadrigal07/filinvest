import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/mixeduse-estates/Content";

const MixeduseEstatesPage = () => {
  const { title, breadcrumbs, image } = HEADER_INFO.mixedUseEstates;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content />
    </>
  );
};

export default MixeduseEstatesPage;
