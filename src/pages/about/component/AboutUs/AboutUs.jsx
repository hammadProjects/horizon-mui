import { Box, Container, Typography } from "@mui/material";
import Img from "../../../../assets/AboutUsPage/about-us.svg";
import bullet from "../../../../assets/AboutUsPage/capa.png";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Grid
      container
      py={{ xs: 5, md: 10 }}
      px={{ xs: 3, sm: 6, md: 10 }}
      spacing={{ xs: 2, sm: 5, md: 5 }}
    >
      <Grid size={{ sm: 12, md: 6, lg: 6 }}>
        <Typography color={"#B69F71"} variant="h6">
          ABOUT US
        </Typography>
        <Typography variant="h4" color="#1C3661" maxWidth={"540px"} my={4}>
          <span style={{ fontFamily: "TabacG1-Bold", fontWeight: 700 }}>
            Experience a futute
          </span>{" "}
          <span style={{ fontFamily: "TabacG1-Bold", fontStyle: "italic" }}>
            Beyond Boundreis
          </span>{" "}
          <span style={{ fontFamily: "TabacG1-Bold", fontWeight: 700 }}>
            with Horizon
          </span>{" "}
        </Typography>
        <Typography variant="body2" maxWidth={"540px"}>
          At Horizon, we offer more than a program; we provide a comprehensive
          solution that transforms your freedom of mobility and global
          opportunities. Our approach is designed specifically for
          forward-thinking individuals who seek security, stability and unique
          advantages for themselves and their families.
        </Typography>
      </Grid>
      <Grid size={{ sm: 12, md: 6, lg: 6 }}>
        <Image
          src={Img}
          alt="Night"
          style={{
            minWidth: "300px",
            width: "100%",
            maxWidth: "553px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AboutUs;
