import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/about-us/subsidiaries/Content";

const Subsidiaries = () => {
  return (
    <>
      <MainHeader
        title="Subsidiaries"
        breadcrumbs="About Us / Subsidiaries"
        bgUrl="subsidiaries.png"
        bgUrlSmall="subsidiaries-small.png"
      />
      <Content />
    </>
  );
};

export default Subsidiaries;
