import Divider from "@/_components/Divider/Divider";
import Footer from "@/_components/Footer/Footer";
import Header from "@/_components/Header/Header";
import HeroSection from "@/_components/HeroSection/HeroSection";
import HeroImg from "../../assets/AboutUsPage/HeroImg.png"
import AboutUs from "./component/AboutUs/AboutUs";
import Mission from "./component/Mission/Mission"
import GetFreeCall from "@/_components/GetFreeCall/GetFreeCall";
import ExploreAdvantages from "./component/ExploreAdvantages/ExploreAdvantages";
import WhyInvest from "../home/components/WhyInvest/WhyInvest";



const About = () => {
  return (
    <>
      <Header />
      <Divider />
      <HeroSection label={"About us"} bgImg={HeroImg.src} />
      <AboutUs />
      <Mission />
      <WhyInvest />
      <ExploreAdvantages />
      <GetFreeCall />
      <Footer />
    </>
  );
};

export default About;
