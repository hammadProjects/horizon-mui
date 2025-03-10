import React from "react";
import AdvantageSection from "./components/AdvantageSection/AdvantageSection";
import HeroImg from "../../assets/ProcessPage/ProcessHeroSection.png";
import Header from "@/_components/Header/Header";
import HeroSection from "@/_components/HeroSection/HeroSection";
import Divider from "@/_components/Divider/Divider";
import Footer from "@/_components/Footer/Footer";
import SuccessStories from "./components/SuccessStories/SuccessStories";
import { Box } from "@mui/material";

const TestimonialsPage = () => {
  return (
    <Box>
      <Header />
      <Divider />
      <HeroSection label={"Testimonials"} bgImg={HeroImg.src} />
      <SuccessStories />
      <AdvantageSection />
      <Footer />
    </Box>
  );
};

export default TestimonialsPage;
