import AboutUs from "@/components/pages/home/AboutUs";
import HeroSection from "@/components/pages/home/HeroSection";
import InvestorRelations from "@/components/pages/home/InvestorRelations";
import LookingForProperty from "@/components/pages/home/LookingForProperty";
import NewsStories from "@/components/pages/home/NewsStories";
import OurBusinesses from "@/components/pages/home/OurBusinesses";
import OurServices from "@/components/pages/home/OurServices";
import Projects from "@/components/pages/home/Projects";
import StockReport from "@/components/pages/home/StockReport";
import qs from "qs";

const query = {
  "site.title": {
    equals: "Land",
  },
};

const stringifiedQuery = qs.stringify(
  {
    page: 2,
    where: query, // ensure that `qs` adds the `where` property, too!
  },
  { addQueryPrefix: true }
);

async function getPages() {
  const res = await fetch(`http://localhost:9000/api/pages${stringifiedQuery}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const HomePage = async () => {
  const pages = await getPages();
  const homeContent =
    pages && pages.docs
      ? pages.docs.find((doc: any) => doc.title === "Home")
      : null;
  return (
    <div>
      <HeroSection homeContent={homeContent} />
      <Projects />
      <LookingForProperty />
      <OurBusinesses />
      <OurServices />
      <AboutUs />
      <NewsStories className="pt-36 xl:pt-44" />
      <InvestorRelations />
      <StockReport />
    </div>
  );
};

export default HomePage;
