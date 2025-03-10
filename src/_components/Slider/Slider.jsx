import {
  Box,
  Stack,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

const GlobalSlider = ({ items }) => {
  console.log(items);

  const [currentIndex, setCurrentIndex] = useState(0);
  const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        slidesToShow: 3,
      },
      {
        breakpoint: 768,
        slidesToShow: 2,
        initialSlide: 2,
      },
      {
        breakpoint: 480,
        slidesToShow: 1,
        initialSlide: 1,
      },
    ],
  };

  const totalSlides = items.length;
  const goToNext = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % totalSlides);
  };
  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  };

  return (
    <Box px={{ md: 10 }} py={5}>
      {/* <Slider {...Settings}> */}
      <Grid container pl={{xs: 4}} spacing={5}>
        {items.map((item) => (
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                width: "90%",
                maxWidth: "360px",
                borderRadius: 0,
                boxShadow: 0,
                bgcolor: "#0E2A3F",
                color: "#FFF",
                height: "427px",
                px: 6,
                boxSizing: "border-box",
                pt: "220px",
              }}
            >
              <CardMedia>
                <Image src={item.img} alt={item.label} />
              </CardMedia>
              <CardContent sx={{ px: 0 }}>
                <Typography variant="body2" fontWeight={700}>
                  {item.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* </Slider> */}
      <Stack direction={"row"} mt={5} justifyContent={"center"} spacing={5}>
        <IconButton disableTouchRipple onClick={goToNext}>
          <ArrowBackIcon color="#0E2A3F" />
        </IconButton>
        <IconButton disableTouchRipple onClick={goToPrev}>
          <ArrowForwardIcon color="#0E2A3F" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default GlobalSlider;
