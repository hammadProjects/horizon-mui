import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import InvestmentCard from "../InvestmentCard/InvestmentCard";

const Requirements = () => {
  return (
    <Box p={{ xs: 3, sm: 5, md: 10 }}>
      <Typography variant="subtitle1" fontWeight={600} mb={4}>
        Requirements to apply
      </Typography>

      <Grid container justifyContent={"space-between"}>
        <Grid size={{ xs: 12, sm: 5.6, md: 2.9 }}>
          <InvestmentCard bgColor={"#DFE5ED"} step={"Step 1"} />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 2.9 }}>
          <InvestmentCard bgColor={"#DFE5ED"} step={"Step 2"} />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 2.9 }}>
          <InvestmentCard bgColor={"#DFE5ED"} step={"Step 3"} />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 2.9 }}>
          <InvestmentCard bgColor={"#DFE5ED"} step={"Step 4"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Requirements;
