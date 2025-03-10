import { Box, IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

import Image from "next/image";
import React from "react";
import Video from "../../../../assets/ProcessPage/Video.png";

const NeedToKnow = () => {
  return (
    <Box p={{ xs: 3, sm: 5, md: 10 }} color={"#0E2A3F"}>
      <Typography variant="h5" px={10} mb={7} textAlign={"center"}>
        Citizenship by investment: What You Need to Know
      </Typography>
      <ApplyForCitizenship />
    </Box>
  );
};

export default NeedToKnow;

export const ApplyForCitizenship = () => {
  return (
    <Grid
      mx={"auto"}
      bgcolor={"#0E2A3F"}
      maxWidth={"1140px"}
      container
      spacing={{ xs: 5 }}
      px={{ xs: 3, md: 5 }}
      py={{ xs: 10, md: 10 }}
    >
      <Grid size={{ xs: 12, sm: 6 }}>
        <Image
          src={Video}
          layout="responsive"
          style={{ maxWidth: "520px", width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }} px={5} color="#FFF" position={"relative"}>
        <Typography variant="h6" maxWidth={"385px"} mb={4}>
          Step-by-step: How to apply for the citizenship by investment program
        </Typography>
        <Typography variant="body2" textAlign={"left"}>
          Explore how our exclusive citizenship and residency-by-investment
          programs can elevate your quality of life. Unlock new opportunities,
          enjoy global security, and benefit from tax advantages tailored to
          align with your personal and professional aspirations.
        </Typography>
        <Stack
          direction={"row"}
          mt={{ xs: 3, sm: 5, md: 8 }}
          justifyContent={"center"}
        >
          <IconButton>
            <WestIcon sx={{ color: "#FFF" }} />
          </IconButton>
          <IconButton>
            <EastIcon sx={{ color: "#FFF" }} />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};
