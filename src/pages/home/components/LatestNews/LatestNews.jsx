import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Img from "../../../../assets/AboutUsPage/about-us.svg";
import NewsPost from "../../../../_components/NewsPost/NewsPost"

export const newsItems = [
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
];

const LatestNews = () => {
  return (
    <Grid container color={"#1E3040"} bgcolor={"#F3F5F8"} py={12} spacing={7}>
      <Grid size={12} textAlign={"center"}>
        <Typography variant="h6" fontWeight={600} color="#B69F71" my={5}>
          LATEST NEWS
        </Typography>
        <Typography variant="h5" maxWidth={"492px"} mx={"auto"}>
          Discover all the essential details about residency and citizenship
          through investment programs.
        </Typography>
      </Grid>
      <Grid size={12} px={{ xs: 3, md: 5, lg: 10 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4 }}
          justifyContent={{ lg: "space-around" }}
          alignItems={{ xs: "center", md: "" }}
        >
          {newsItems.map((item) => (
            <NewsPost
              label={item.label}
              label2={item.label2}
              key={item.index}
              desc={item.desc}
              href={item.href}
              img={item.img}
            />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LatestNews;

