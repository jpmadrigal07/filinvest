import HeroSection from "../components/home/HeroSection"
import LookingForProperty from "../components/home/LookingForProperty";
import OurBusinesses from "../components/home/OurBusinesses";
import OurServices from "../components/home/OurServices";
import Projects from "../components/home/Projects";

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <Projects/>
            <LookingForProperty/>
            <OurBusinesses/>
            <OurServices/>
        </>
    )
}

export default HomePage;