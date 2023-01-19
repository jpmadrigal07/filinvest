import ScreenFooter from "@/components/footer/ScreenFooter";
import AboutUs from "@/components/pages/home/AboutUs";
import HeroSection from "@/components/pages/home/HeroSection";
import InvestorRelations from "@/components/pages/home/InvestorRelations";
import LookingForProperty from "@/components/pages/home/LookingForProperty";
import NewsStories from "@/components/pages/home/NewsStories";
import OurBusinesses from "@/components/pages/home/OurBusinesses";
import OurServices from "@/components/pages/home/OurServices";
import Projects from "@/components/pages/home/Projects";
import StockReport from "@/components/pages/home/StockReport";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const HomePage = async () => {
  const content = await getPageContent("639a5782b60dc36e6fc86c93");
  return (
    <div>
      <HeroSection homeContent={content} />
      <Projects />
      {/* @ts-expect-error */}
      <LookingForProperty />
      <OurBusinesses />
      <OurServices />
      <AboutUs />
      <NewsStories className="pt-36 xl:pt-44" />
      <InvestorRelations />
      <StockReport />
      <ScreenFooter />
    </div>
  );
};

export default HomePage;
