import React from "react";
import Grid from "@mui/material/Grid2";

import { blogData } from "@/utils/data";
import { Avatar, Box, Stack, Typography } from "@mui/material";

import BlogAvatar from "../../../../assets/BlogPage/BlogAvatar.png";
import Spotlight from "../../../../assets/AboutUsPage/about-us.svg";
import Image from "next/image";

const spotlightItems = [
  {
    title: "Citizenship vs. Residency by Investment: What’s Right for You?",
    img: Spotlight,
  },
  {
    title: "Peruvian Citizenship: Unlocking Global Mobility for MENA Investors",
    img: Spotlight,
  },
  {
    title: "Why Peru is the ideal destination for Citizenship by Investment",
    img: Spotlight,
  },
];

const MobilityBenefits = () => {
  return (
    <Grid
      container
      px={{ xs: 3, sm: 5, md: 10 }}
      py={10}
      spacing={{ xs: 5, md: 0 }}
    >
      <Grid size={{ md: 8 }} spacing={2} color={"#4C6275"}>
        <Typography variant="body2" fontWeight={700}>
          {blogData.title}
        </Typography>
        {blogData.key_benefits.map((benefit, index) => {
          return (
            <Box maxWidth={"830px"} key={index}>
              <Typography my={3} variant="h5" fontWeight={600}>
                {benefit?.heading}
              </Typography>
              <Typography variant="body2">{benefit?.description}</Typography>
            </Box>
          );
        })}
        {/* Process */}
        <Box maxWidth={"830px"} px={2}>
          <Typography variant="h5" fontWeight={700}>
            {blogData.process.title}
          </Typography>
          <Typography variant="body2" mb={2}>
            {blogData.process.description}
          </Typography>
          <ol>
            {blogData.process.steps.map((item, index) => (
              <li key={index}>
                <Typography>
                  {item.title}: {item.description}
                </Typography>
              </li>
            ))}
          </ol>
        </Box>
      </Grid>
      <Grid size={{ md: 4 }}>
        <Stack mb={{ md: 5 }}>
          <Avatar src={BlogAvatar} alt={"Horizon Press"} />
          <Typography variant="body1" fontWeight={700} color="#0E2A3F" mt={2}>
            Horizon press
          </Typography>
          <Typography variant="body1" color="#5E5E5E">
            Cityzenship assessment
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h6" fontWeight={500}>
            Spotlight
          </Typography>
          {spotlightItems.map((item, index) => (
            <Stack my={5} spacing={2}>
              <Image
                src={item.img}
                alt=""
                layout="responsive"
                style={{ maxWidth: "260px" }}
              />
              <Typography variant="body1" fontWeight={700} maxWidth={"256px"}>
                {item.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MobilityBenefits;
