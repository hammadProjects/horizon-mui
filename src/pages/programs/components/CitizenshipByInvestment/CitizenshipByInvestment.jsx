import React from "react";
import Btn from "@/_components/Button/Btn";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import InvestmentCard from "../InvestmentCard/InvestmentCard";

const CitizenshipByInvestment = ({ index, title }) => {
  return (
    <Box p={{ xs: 5, lg: 10 }} bgcolor={"#DFE5ED"}>
      <Typography
        my={2}
        position={"relative"}
        variant="h2"
        color="#5774A1"
        sx={{
          ":after": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: 6,
            width: 25,
            height: 2,
            bgcolor: "#5774A1",
          },
        }}
      >
        {index || 1}
      </Typography>
      <Typography fontFamily={"TabacG1-Bold"} variant="h3" fontWeight={700}>
        Program: <br />
        {title || "Citizenship"} by{" "}
        <span style={{ fontStyle: "italic", fontWeight: 500 }}>investment</span>
      </Typography>
      <Typography maxWidth={"429px"} variant="body2" my={7}>
        The Investor Program in Peru is specifically designed to attract foreign
        nationals, providing a pathway to obtain Peruvian citizenship and a
        passport within approximately two years through a selection of approved
        investment options.
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        justifyContent={"space-between "}
      >
        <Typography variant="subtitle1">
          Exclusive Advantages of Our Investment Programs
        </Typography>
        <Box maxWidth={"200px"}>
          <Btn label={"Watch about it"} bg={"#B69F71"} clr={"#0E2A3F"} />
        </Box>
      </Stack>

      <Grid container py={5} justifyContent={"space-between"} spacing={3}>
        <Grid size={{ xs: 12, sm: 5.6, md: 2.9 }}>
          <InvestmentCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 2.9 }}>
          <InvestmentCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 2.9 }}>
          <InvestmentCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 2.9 }}>
          <InvestmentCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CitizenshipByInvestment;
