import React from "react";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Dollar from "../../../../assets/HomePage/dollar.png";
import Hand from "../../../../assets/HomePage/hand.png";
import Quality from "../../../../assets/HomePage/quality.png";
import Image from "next/image";
import GlobalSlider from "@/_components/Slider/Slider";

const items = [
  { label: "Economic growth", img: Dollar, index: 0 },
  { label: "Strategic opportunities", img: Hand, index: 1 },
  { label: "Quality of life", img: Quality, index: 2 },
  // { label: "Economic growth", img: Dollar, index: 3 },
  // { label: "Strategic opportunities", img: Hand, index: 4 },
  // { label: "Quality of life", img: Quality, index: 5 },
];

const WhyInvest = () => {
  return (
    <Stack py={8}>
      <Stack mx={"auto"} textAlign={"center"}>
        <Typography variant="h6" color="#B69F71">
          WHY INVEST IN PERU
        </Typography>
        <Typography
          variant="h5"
          color="#1C3661"
          fontWeight={500}
          mt={7}
          maxWidth={"492px"}
        >
          Embrace a future without limits with simplified and accessible
          citizenship services for everyone.
        </Typography>
      </Stack>
      <GlobalSlider items={items} />
    </Stack>
  );
};

export default WhyInvest;
