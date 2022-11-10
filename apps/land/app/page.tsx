import AboutUs from "../components/home/AboutUs";
import HeroSection from "../components/home/HeroSection"
import InvestorRelations from "../components/home/InvestorRelations";
import LookingForProperty from "../components/home/LookingForProperty";
import NewsStories from "../components/home/NewsStories";
import OurBusinesses from "../components/home/OurBusinesses";
import OurServices from "../components/home/OurServices";
import Projects from "../components/home/Projects";
import StockReport from "../components/home/StockReport";

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