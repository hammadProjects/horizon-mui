import React from "react";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
const TestimonialCard = ({ name, message, recommendation, imgUrl }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#DFE5ED",
        borderRadius: 0,
        boxShadow: 0,
      }}
    >
      <Grid container py={3}>
        <Grid
          size={{ xs: 12, md: 6, lg: 4 }}
          display={"flex"}
          justifyContent={{ xs: "flex-start", md: "center" }}
          px={{ xs: 2, md: 0 }}
        >
          <Image
            src={imgUrl}
            alt={name}
            layout="responsive"
            style={{
              minWidth: "250px",
              width: "100%",
              maxWidth: "358px",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <CardContent sx={{ color: "#1E3040", mt: "50px" }}>
            <Typography
              variant="body1"
              fontWeight="600"
              sx={{
                position: "relative",
                marginBottom: "26px",
                maxWidth: "620px",
                width: "100%",
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
              {recommendation}
            </Typography>
            <Typography
              variant="body2"
              color="#4C6275"
              mb="26px"
              sx={{ maxWidth: "662px", lineHeight: "24px" }}
            >
              {message}
            </Typography>
            <Typography variant="body2" fontWeight="600">
              {name}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TestimonialCard;
