import Btn from "@/_components/Button/Btn";
import { Box, Typography } from "@mui/material";
import React from "react";

const HomeHeroSection = () => {
  return (
    <Box
      bgcolor={"#0E2A3F"}
      color={"white"}
      py={"75px"}
      px={{ md: "150px", sm: "120px", xs: "60px" }}
    >
      <Typography
        variant="h4"
        fontFamily={"TabacG1-Bold"}
        fontWeight={700}
        width={{ sm: "55%", md: "60%" }}
        maxWidth={"569px"}
        mb={"95px"}
      >
        Experience a feature beyond boundries with accessbile <br />
        citizenship for all
      </Typography>
      <Btn label={"Review your case"} clr={"#0E2A3F"} bg={"#B69F71"} />
    </Box>
  );
};

export default HomeHeroSection;
