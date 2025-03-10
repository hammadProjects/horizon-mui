import React from "react";
import { Box } from "@mui/material";
import Header from "../../_components/Header/Header";
import Divider from "../../_components/Divider/Divider";
import HeroSection from "../../_components/HeroSection/HeroSection";
import HeroImg from "../../assets/BlogPage/HeroBlog.png";
import Footer from "../../_components/Footer/Footer";
import Explore from "./component/Explore/Explore";
import RecentStories from "./component/RecentStories/RecentStories";

const BlogPage = () => {
  return (
    <Box bgcolor={"#F3F5F8"}>
      <Header />
      <Divider />
      <HeroSection label={"Blog"} bgImg={HeroImg.src} />
      <RecentStories />
      <Explore />
      <Footer />
    </Box>
  );
};

export default BlogPage;
