import React from "react";

import Header from "@/_components/Header/Header";
import HeroSection from "@/_components/HeroSection/HeroSection";
import { Box } from "@mui/material";
import ProgramsHeroImg from "../../assets/ProgramsPage/ProgramHeroSection.png";
import Divider from "@/_components/Divider/Divider";
import OurServices from "../home/components/OurServices/OurServices";
import ProgramServices from "./components/ProgramServices/ProgramServices";
import PassportClassification from "../home/components/PassportClassification/PassportClassification";
import Footer from "@/_components/Footer/Footer";
import CitizenshipByInvestment from "./components/CitizenshipByInvestment/CitizenshipByInvestment";
import RecommendingOption from "./components/RecommendingOption/RecommendingOption";
import Requirements from "./components/Requirements/Requirements";
import NeedToKnow from "./components/NeedToKnow/NeedToKnow";

const ProgramPage = () => {
  return (
    <Box bgcolor={"#F3F5F8"}>
      <Header />
      <Divider />
      <HeroSection label={"Programs"} bgImg={ProgramsHeroImg.src} />
      <ProgramServices />
      <CitizenshipByInvestment />
      <RecommendingOption option={1} />
      <Requirements />
      {/* Option 2 */}
      <RecommendingOption option={2} />
      <Requirements />
      <PassportClassification />
      <NeedToKnow />
      <Footer />
    </Box>
  );
};

export default ProgramPage;
