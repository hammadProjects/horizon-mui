import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Box, Stack, Typography } from "@mui/material";
import TestimonialImg from "../../../../assets/TestimonialsPage/TestimonialImg.png";

const testimonialItems = [
    {
      name: "Bassem Yakhour",
      message:
        "I am very happy that we have reached this moment, The moment of  receiving my passport, I thank Reach Immigration for allowing me the  opportunity to obtain what I call the magic carpet, which I consider  important on a personal and professional level, and which will give me  the freedom of movement that I will need.",
      recommendation:
        "I recommend this service to anyone looking for a reliable and efficient solution",
      imgUrl: TestimonialImg,
    },
    {
      name: "Hani Shaker",
      message: `Today I consider myself lucky because today I have the benefit of  freedom of movement, freedom of investment, travelling, and many other  benefits… The Caribbean passport was the solution for me, and for many  people to solve their problems and the restrictions that prevent them  from traveling… 
Thank you from the bottom of my heart, Horizon.`,
      recommendation:
        "The team was highly professional and guided me through every step seamlessly",
      imgUrl: TestimonialImg,
    },
    {
      name: "Yasmine Sultan",
      message:
        "I am very happy that we have reached this moment, The moment of  receiving my passport, I thank Reach Immigration for allowing me the  opportunity to obtain what I call the magic carpet, which I consider  important on a personal and professional level, and which will give me  the freedom of movement that I will need.",
      recommendation:
        "I recommend this service to anyone looking for a reliable and efficient solution",
      imgUrl: TestimonialImg,
    },
    {
      name: "Hani Shaker",
      message:
        "I am very happy that we have reached this moment, the moment of receiving my passport. I thank Reach Immigration for allowing me the opportunity to obtain what I call the magic carpet, which I consider important on a personal and professional level, and which will give me the freedom of movement that I will need.",
      recommendation:
        "I recommend this service to anyone looking for a reliable and efficient solution.",
      imgUrl: TestimonialImg,
    },
  ];

const SuccessStories = () => {
  return (
    <Box p={{xs: 3, md: 10}}>
      <Typography variant="h6" color="#B69F71">
        OUR SUCCESS STORIES
      </Typography>
      <Typography
        mb={"100px"}
        fontWeight={"700"}
        variant="h4"
        width={"100%"}
        maxWidth={"523px"}
        fontFamily={"TabacG1-Bold"}
      >
        Explore what our client says about our{" "}
        <span style={{ fontStyle: "italic" }}>commitment and expertise</span>
      </Typography>
      <Stack spacing={5}>
        {testimonialItems.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            message={testimonial.message}
            recommendation={testimonial.recommendation}
            imgUrl={testimonial.imgUrl}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SuccessStories;
