import React from "react";
import Header from "@/_components/Header/Header";
import Divider from "@/_components/Divider/Divider";
import HeroImg2 from "../../../assets/BlogPage/HeroBlog.png";
import HeroSection from "@/_components/HeroSection/HeroSection";
import Input from "../component/Input/Input";
import PostPreview from "../component/PostPreview/PostPreview";
import RelatedPosts from "../component/RelatedPosts/RelatedPosts";
import { itemLinks } from "../component/Explore/Explore";
import Footer, { SocialLinks } from "@/_components/Footer/Footer";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import MobilityBenefits from "../component/MobilityBenefits/MobilityBenefits";

const BlogPage = () => {
  return (
    <Box bgcolor={"#F3F5F8"}>
      <Header />
      <Divider />
      <HeroSection label={"Blog"} bgImg={HeroImg2.src} />
      <Navigation />
      <PostPreview />
      <MobilityBenefits />
      <SpreadTheWorld />
      <RelatedPosts />
      <Footer />
    </Box>
  );
};

export default BlogPage;

const NavItems = ({ itemLinks }) => {
  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      {itemLinks.map((item, index) => (
        <Link
          style={{
            textDecoration: "none",
            textAlign: "center",
            color: "#5774A1",
            marginRight: "2em",
            marginTop: ".75em",
          }}
          href={item.href}
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </Stack>
  );
};

const Navigation = () => {
  return (
    <Stack
      py={5}
      mx={{ xs: 3, sm: 5, md: 3, lg: 8 }}
      direction={{ xs: "column", md: "row" }}
      justifyContent={{ md: "space-between" }}
      alignItems={{ xs: "center", md: "" }}
      sx={{
        position: "relative",
        ":after": {
          content: "''",
          display: "block",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "#0E2A3F",
          height: 5,
        },
      }}
    >
      <NavItems itemLinks={itemLinks} />
      <Box mt={2}>
        <Input />
      </Box>
    </Stack>
  );
};

const SpreadTheWorld = () => {
  return (
    <Stack
      bgcolor={"#DFE5ED"}
      py={5}
      spacing={5}
      direction={{ xs: "column", sm: "row" }}
      justifyContent={"space-around"}
    >
      <Typography textAlign={"center"} variant="h5">
        <span style={{ fontWeight: 700 }}>Enjoyed reading it?</span> Spread the
        word
      </Typography>
      <SocialLinks clr={"#000"} />
    </Stack>
  );
};
