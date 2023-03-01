import MainHeader from "@/components/header/MainHeader";
import Content from "@/components/pages/sitemap/Content";

export async function generateMetadata() {
  return {
    title: "Sitemap",
    description: "Sitemap",
  };
}

const SitemapPage = () => {
  return (
    <>
      <MainHeader title="Sitemap" />
      <Content />
    </>
  );
};

export default SitemapPage;
