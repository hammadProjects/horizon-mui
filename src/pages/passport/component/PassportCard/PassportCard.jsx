import Btn from "@/_components/Button/Btn";
import passportImg from "../../../../assets/SG1.png";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import Image from "next/image";

const PassportCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "360px",
        width: "100%",
        height: "497px",
        borderRadius: 0,
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Stack
          direction={{ sm: "column", md: "row" }}
          justifyContent="space-around"
          alignItems={"center"}
          mb={"39px"}
        >
          <Typography variant="body1" fontWeight={"700"}>
            Singapore
          </Typography>
          <Btn label="View passport" bg="#0E2A3F" />
        </Stack>
        <Image
          src={passportImg}
          width={"135px"}
          height={"189px"}
          alt="passport"
        />
        <Grid container spacing={2} mt={2}>
          <Grid size={{ xs: 12, sm: 5.6, md: 5.9 }}>
            <StyledRank text={"Rank"} bg={"#0E2A3F"} count={12} />
          </Grid>
          <Grid size={{ xs: 12, sm: 5.6, md: 5.9 }}>
            <StyledRank text={"Visa Free"} bg={"#006633"} count={33} />
          </Grid>
          <Grid size={{ xs: 12, sm: 5.6, md: 5.9 }}>
            <StyledRank text={"Visa on arrival"} bg={"#5774A1"} count={45} />
          </Grid>
          <Grid size={{ xs: 12, sm: 5.6, md: 5.9 }}>
            <StyledRank text={"Visa required"} bg={"#D21034"} count={60} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PassportCard;

export const StyledRank = ({ text, bg, count }) => (
  <>
    <Stack direction="column" spacing={3} color={bg}>
      <Typography
        textAlign={"left"}
        fontSize="14px"
        fontWeight="700"
        sx={{
          position: "relative",
          ":before": {
            content: '""',
            display: "block",
            width: "100%",
            maxWidth: "120px",
            height: "2px",
            backgroundColor: bg,
            position: "absolute",
            left: 0,
            bottom: 0,
          },
        }}
      >
        {text}
      </Typography>
      <Typography textAlign={"left"}>{count}</Typography>
    </Stack>
  </>
);
