import Footer from "@/_components/Footer/Footer";
import Header from "@/_components/Header/Header";
import React from "react";
import HomeHeroSection from "./components/HeroSection/HeroSection";
import Image from "next/image";
import BgImg from "../../assets/HomePage/main.svg";
import Process from "./components/Process/Process";
import { Box } from "@mui/material";
import AboutUsHome from "./components/AboutUsHome/AboutUsHome";
import WhatMakeDifferent from "./components/WhatMakeDifferent/WhatMakeDifferent";
import PassportClassification from "./components/PassportClassification/PassportClassification";
import WhyInvest from "./components/WhyInvest/WhyInvest";
import LatestNews from "./components/LatestNews/LatestNews";
import OurServices from "./components/OurServices/OurServices";
import StepsNavigator from "@/_components/StepNavigator/StepNavigator";
import GetFreeCall from "@/_components/GetFreeCall/GetFreeCall";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeHeroSection />
      <Box bgcolor={"#D1D9E7"}>
        <Image src={BgImg} width={"100%"} layout="responsive" alt="building" />
      </Box>
      <StepsNavigator />
      <OurServices />
      <Process />
      <AboutUsHome />
      <WhatMakeDifferent />
      <WhyInvest />
      <LatestNews />
      <PassportClassification />
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${BgImg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <GetFreeCall />
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
