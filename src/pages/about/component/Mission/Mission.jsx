import React from "react";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Video from "../../../../assets/HomePage/video.svg";
import { Stack, Typography } from "@mui/material";

const Items = [
  {
    label: "Mission",
    desc: "To help our clients access a future without limits through personalized citizenship and residency by investment programs in Peru.",
    index: 0,
  },
  {
    label: "Vision",
    desc: "To become the global reference for citizens seeking new mobility and investment opportunities, establishing connections between opportunities in Peru and the rest of the world.",
    index: 1,
  },
];

const Mission = () => {
  return (
    <Grid container bgcolor={"#E3EBF4"} fontFamily={"Montserrat"} py={8}>
      <Grid size={{ xs: 12, md: 6 }} textAlign={"center"}>
        <Image
          src={Video}
          alt="Video"
          style={{
            width: "100%",
            maxWidth: "309px",
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} px={{ xs: 1, sm: 0 }}>
        <Stack alignItems={{ xs: "center", md: "start" }}>
          {Items.map((item) => (
            <MissionAndVision
              label={item.label}
              desc={item.desc}
              index={item.index}
            />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Mission;

const MissionAndVision = ({ label, desc, index }) => {
  return (
    <Stack maxWidth={"520px"}>
      <Typography
        sx={{
          ml: 5,
          position: "relative",
          ":before": {
            content: "''",
            display: "block",
            width: "15px",
            height: "15px",
            backgroundColor: "#B69F71",
            position: "absolute",
            top: 20,
            left: "-40px",
            transform: "rotate(45deg)",
          },
        }}
        fontFamily={"TabacG1-Bold"}
        variant="h3"
        color="#1C3661"
        mt={5}
      >
        {label}
      </Typography>
      <Typography
        maxWidth={"385px"}
        variant="subtitle2"
        borderBottom={index == 0 ? "4px solid #5774A1" : ""}
        pb={5}
        mt={2}
        color="#0E2A3F"
      >
        {desc}
      </Typography>
    </Stack>
  );
};
