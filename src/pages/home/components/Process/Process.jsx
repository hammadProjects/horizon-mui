import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import Btn from "@/_components/Button/Btn";
import Image from "next/image";
import Video from "../../../../assets/HomePage/video.svg";

const Process = () => {
  return (
    <Grid container bgcolor={"#D1D9E7"} py={10} spacing={{ xs: 10 }}>
      <Grid size={{ sm: 12, md: 7, lg: 6 }} px={{ xs: 3, sm: 7, md: 20 }}>
        <Typography
          variant="h6"
          position={"relative"}
          ml={4}
          sx={{
            ":before": {
              content: "''",
              display: "block",
              width: "15px",
              height: "15px",
              backgroundColor: "#0E2A3F",
              position: "absolute",
              top: 6,
              left: "-30px",
              transform: "rotate(45deg)",
            },
          }}
        >
          PROCESS
        </Typography>
        <Typography
          variant="h5"
          fontWeight={"600"}
          my={"12px"}
          width={{ xs: "100%", md: "180%" }}
          maxWidth={"492px"}
        >
          Unlock a future without limits with seamless and accessible
          citizenship services for everyone.
        </Typography>
        <Btn clr={"white"} bg={"#0E2A3F"} label={"Know more"} />
      </Grid>
      <Grid
        size={{ xs: 12, md: 4, lg: 6 }}
        px={{ xs: 3, sm: 7, md: 0 }}
        textAlign={{ sm: "center", md: "left" }}
      >
        <Image src={Video} alt="Video" />
      </Grid>
    </Grid>
  );
};

export default Process;
