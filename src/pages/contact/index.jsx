import Footer from "@/_components/Footer/Footer";
import Header from "@/_components/Header/Header";
import HeroSection from "@/_components/HeroSection/HeroSection";
import { Box, Divider } from "@mui/material";
import React from "react";
import BgImg from "../../assets/AboutUsPage/HeroImg.png"
import GetFreeCall from "@/_components/GetFreeCall/GetFreeCall";
import ContactUs from "./components/ContactUs/ContactUs";

const Contact = () => {
  return (
    <Box bgcolor={"#F3F5F8"}>
      <Header />
      <Divider />
      <HeroSection bgImg={BgImg.src} label={"Contact"} />
      <ContactUs />
      <Box py={10}>
      <GetFreeCall bg={"#FFF"} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Contact;
