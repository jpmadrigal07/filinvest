import Content from "@/components/pages/our-businesses/offices/office-parks/north-gate/Content";

export async function generateMetadata() {
  return {
    title: "North Gates",
    description: "North Gates",
  };
}

const OfficeParksPage = () => {
  return (
    <>
      <Content />
    </>
  );
};

export default OfficeParksPage;
