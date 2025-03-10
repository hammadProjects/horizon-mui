import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Img from "../../../../assets/HomePage/InvestmentImg.png";
const OurServices = () => {
  return (
    <Grid container px={{ xs: 3, md: 12 }} color={"#0E2A3F"} spacing={5}>
      <Grid size={12}></Grid>
      <Grid size={12}>
        <Typography variant="h6" fontWeight={600} color="#B69F71">
          ABOUT OUR SERVICES
        </Typography>
        <Typography variant="body2" maxWidth={"507px"} mt={3}>
          At Horizon, we offer more than a program; we provide a comprehensive
          solution that transforms your freedom of mobility and global
          opportunities. Our approach is designed specifically for
          forward-thinking individuals who seek security, stability and unique
          advantages for themselves and their families.
        </Typography>
      </Grid>
      <Grid size={12} pb={5}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={4}
        >
          <InvestmentCard
            img={Img}
            label={"Citizenship by Investment in Peru"}
          />
          <InvestmentCard img={Img} label={"Investment Residency"} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default OurServices;

const InvestmentCard = ({ img, label }) => {
  return (
    <Card
      sx={{
        position: "relative",
        color: "#FFF",
        borderRadius: 0,
        boxShadow: 0,
        maxWidth: "361px",
        maxHeight: "450px",
      }}
    >
      <Box
        bgcolor={"#5774A1"}
        width={"100%"}
        maxWidth="361px"
        height={"100%"}
        position={"absolute"}
        top={0}
        left={0}
        sx={{ opacity: 0.4 }}
      />
      <CardMedia sx={{ height: "100%" }}>
        <Image src={img} alt={label} />
      </CardMedia>
      <CardContent sx={{ position: "absolute", bottom: "40px", width: "100%" }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography maxWidth={"186px"}>{label}</Typography>
          <IconButton>
            <ArrowCircleRightIcon sx={{ color: "white" }} />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};
