import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Grid from "@mui/material/Grid2";
import NewsPost from "@/_components/NewsPost/NewsPost";
import Img from "../../../../assets/AboutUsPage/about-us.svg";
import Btn from "@/_components/Button/Btn";

const newsItems = [
  {
    index: 0,
    label: "INVERSIONS",
    label2: "Why Peru is the ideal destination for Citizenship by Investment",
    desc: "When it comes to finding the perfect blend of opportunity, affordability, and cultural richness, Peru stands out as a top destination for citizenship.",
    href: "/",
    img: Img, // Replace with your image URL or import
  },
  {
    index: 1,
    label: "ECONOMIC GROWTH",
    label2: "Peru's promising economic growth and investment opportunities",
    desc: "Peru is one of the fastest-growing economies in Latin America, with vast opportunities in key sectors such as mining, agriculture, and tourism.",
    href: "/",
    img: Img, // Replace with your image URL or import
  },
  {
    index: 2,
    label: "STRATEGIC LOCATION",
    label2: "Why Peru’s strategic location makes it a top destination",
    desc: "Situated in the heart of South America, Peru's location offers easy access to global markets, making it an ideal place for investment.",
    href: "/",
    img: Img, // Replace with your image URL or import
  },
  {
    index: 3,
    label: "INVERSIONS",
    label2: "Why Peru is the ideal destination for Citizenship by Investment",
    desc: "When it comes to finding the perfect blend of opportunity, affordability, and cultural richness, Peru stands out as a top destination for citizenship.",
    href: "/",
    img: Img, // Replace with your image URL or import
  },
  {
    index: 4,
    label: "ECONOMIC GROWTH",
    label2: "Peru's promising economic growth and investment opportunities",
    desc: "Peru is one of the fastest-growing economies in Latin America, with vast opportunities in key sectors such as mining, agriculture, and tourism.",
    href: "/",
    img: Img, // Replace with your image URL or import
  },
  {
    index: 5,
    label: "STRATEGIC LOCATION",
    label2: "Why Peru’s strategic location makes it a top destination",
    desc: "Situated in the heart of South America, Peru's location offers easy access to global markets, making it an ideal place for investment.",
    href: "/",
    img: Img, // Replace with your image URL or import
  },
];

export const itemLinks = [
  { name: "All", href: "/", index: 0 },
  { name: "Economy", href: "/", index: 1 },
  { name: "Citizenship", href: "/", index: 2 },
  { name: "Passport", href: "/", index: 3 },
  { name: "Business", href: "/", index: 4 },
  { name: "Investment programs", href: "/", index: 5 },
];

const Explore = () => {
  return (
    <Box py={10} px={{ xs: 3, md: 10 }} color={"#1E3040"}>
      <Typography color="#5774A1" variant="body1" mb={2}>
        ALL POSTS
      </Typography>
      <Stack
        sx={{
          position: "relative",
          ":after": {
            content: "''",
            display: "block",
            width: "100%",
            position: "absolute",
            bottom: -15,
            left: 0,
            backgroundColor: "#0E2A3F",
            height: 5,
          },
        }}
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        <Typography variant="h5" textAlign={{ xs: "center", md: "left" }}>
          MORE TO EXPLORE
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }}>
          {itemLinks.map((item) => (
            <Link
              style={{
                textDecoration: "none",
                textAlign: "center",
                color: "#5774A1",
                marginLeft: "2em",
                marginTop: ".75em",
              }}
              href={item.href}
              key={item.index}
            >
              {item.name}
            </Link>
          ))}
        </Stack>
      </Stack>
      <Grid container py={10} justifyContent={"space-between"} rowSpacing={5}>
        {newsItems.map((item) => (
          <Grid size={{ xs: 12, sm: 5.9, md: 3.9 }} key={item.index}>
            <NewsPost
              img={item.img}
              label={item.label}
              desc={item.desc}
              label2={item.label2}
              href={item.href}
            />
          </Grid>
        ))}
      </Grid>
      <Box textAlign={"center"}>
        <Btn label={"MORE POSTS"} clr={"#FFF"} bg={"#0E2A3F"} />
      </Box>
    </Box>
  );
};

export default Explore;
