import Header from "@/_components/Header/Header";
import HeroSection from "@/_components/HeroSection/HeroSection";
import { Box, Divider } from "@mui/material";
import React from "react";

import ProcessHeroImg from "../../assets/ProcessPage/ProcessHeroSection.png";
import StepsNavigator from "@/_components/StepNavigator/StepNavigator";
import Image from "next/image";

import Image1 from "../../assets/ProcessPage/process-page-img-1.png";
import Image2 from "../../assets/ProcessPage/process-page-img-2.png";
import AboutTheProcess from "./components/AboutTheProcess/AboutTheProcess";
import Footer from "@/_components/Footer/Footer";
import GetFreeCall from "@/_components/GetFreeCall/GetFreeCall";

const index = () => {
  return (
    <Box bgcolor={"#F3F5F8"}>
      <Header />

      <Divider />
      <HeroSection label={"Process"} bgImg={ProcessHeroImg.src} />

      <StepsNavigator />

      <Box bgcolor={"#D1D9E7"}>
        <Image src={Image1} width={"100%"} layout="responsive" alt="Image1" />
      </Box>

      <AboutTheProcess />

      <Box bgcolor={"#D1D9E7"}>
        <Image src={Image2} width={"100%"} layout="responsive" alt="Image1" />
      </Box>

      <AboutTheProcess />

      <Box py={10}>
        <GetFreeCall bg={"#FFF"} />
      </Box>

      <Footer />
    </Box>
  );
};

export default index;
