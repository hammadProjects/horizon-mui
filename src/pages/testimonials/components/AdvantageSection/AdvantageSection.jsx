import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import Video from "../../../../assets/ProcessPage/Video.png";
import Image from "next/image";

const AdvantageSection = () => {
  return (
    <Box color="#0E2A3F">
      <Typography
        sx={{
          position: "relative",
          ":after": {
            content: '""',
            width: "15px",
            height: "15px",
            backgroundColor: "#B69F71",
            display: "block",
            transform: "rotate(45deg)",
            position: "absolute",
            left: -50,
            top: "25px",
          },
        }}
        ml= {{xs: 3, sm: 5, md: 26}}
        variant="h5"
        fontWeight={"700"}
        maxWidth={"554px"}
      >
        Exploring the Advantages of Citizenship and Residency by Investment
      </Typography>
      <Grid container py={5} spacing={5}>
        <Card Img={Video} name={"Ms. Elie Saad"} index={0}/>
        <Card Img={Video} name={"Ms. Elie Saad"} index={1}/>
        <Card Img={Video} name={"Ms. Elie Saad"} index={2} />
        <Card Img={Video} name={"Ms. Elie Saad"} index={3} />
      </Grid>
    </Box>
  );
};

export default AdvantageSection;

const Card = ({ Img, name, index }) => {
  return (
    <Grid size={{ xs: 12, sm: 6 }} textAlign={{xs: "center", md: (index % 2 === 0 ? "left" : "right")}} px={{xs: 2,sm: 5,md: 10}}>
      <Typography
        variant="h6"
        my={"36px"}
        fontWeight={"600"}
        sx={{
          position: "relative",
          marginBottom: "26px",
          width: "80%",
          maxWidth: "620px",
          "&::before": {
            content: '"\\201C"',
            position: "absolute",
            top: "-100px",
            fontSize: "8rem",
            color: "gray",
            opacity: "0.5",
          },
        }}
      >
        {name}
      </Typography>
      <Image
        src={Img}
        alt={"Video"}
        layout="responsive"
        style={{
          width: "100%",
          maxWidth: "450px",
        }}
      />
    </Grid>
  );
};
