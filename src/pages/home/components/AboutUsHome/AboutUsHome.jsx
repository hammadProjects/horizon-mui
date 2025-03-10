import Btn from "@/_components/Button/Btn";
import { Box, Typography } from "@mui/material";
import React from "react";
import Capa from "../../../../assets/HomePage/capa.png";

const AboutUsHome = () => {
  return (
    <Box
      width={"90%"}
      maxWidth={"532px"}
      marginX={"auto"}
      textAlign={"center"}
      py={"3em"}
    >
      <Typography variant="h6" color="#B69F71" mb={"2em"}>
        ABOUT US
      </Typography>
      <Typography
        variant="h5"
        color="#1C3661"
        maxWidth={"492px"}
        mx={"auto"}
        fontWeight={600}
      >
        Empowering individuals to achieve citizenship and residency with
        confidence and integrity.
      </Typography>
      <Typography
        sx={{
          position: "relative",
          ":before": {
            content: "''",
            display: "block",
            backgroundImage: `url(${Capa})`,
            width: "25px",
            height: "32.7px",
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
        variant="body2"
        color="#0E2A3F"
        my={"5em"}
        fontWeight={500}
      >
        At Horizon, we offer more than a program; we provide a comprehensive
        solution that transforms your freedom of mobility and global
        opportunities. Our approach is designed specifically for
        forward-thinking individuals who seek security, stability and unique
        advantages for themselves and their families.
      </Typography>
      <Btn label={"Know more"} clr={"#FFF"} bg={"#0E2A3F"} />
    </Box>
  );
};

export default AboutUsHome;
