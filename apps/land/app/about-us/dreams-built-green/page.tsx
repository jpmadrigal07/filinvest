import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/about-us/dreams-built-green/Content";
import { HEADER_INFO } from "@/components/pages/about-us/constants";

const DreamsBuiltGreen = () => {
  const { title, breadcrumbs, image, imageSmall } =
    HEADER_INFO.dreamsBuiltGreen;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
      />
      <Content />
    </>
  );
};

export default DreamsBuiltGreen;
