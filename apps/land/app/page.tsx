import AboutUs from "../components/pages/home/AboutUs";
import HeroSection from "../components/pages/home/HeroSection"
import InvestorRelations from "../components/pages/home/InvestorRelations";
import LookingForProperty from "../components/pages/home/LookingForProperty";
import NewsStories from "../components/pages/home/NewsStories";
import OurBusinesses from "../components/pages/home/OurBusinesses";
import OurServices from "../components/pages/home/OurServices";
import Projects from "../components/pages/home/Projects";
import StockReport from "../components/pages/home/StockReport";

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <Projects/>
            <LookingForProperty/>
            <OurBusinesses/>
            <OurServices/>
            <AboutUs/>
            <NewsStories/>
            <InvestorRelations/>
            <StockReport/>
        </>
    )
}

export default HomePage;