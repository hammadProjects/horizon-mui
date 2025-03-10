import { ApplyForCitizenship } from "@/pages/programs/components/NeedToKnow/NeedToKnow";
import { Box, Typography } from "@mui/material";
import React from "react";

const ExploreAdvantages = () => {
  return (
    <Box bgcolor={"#FFF"} py={5} px={{xs: 3}}>
      <Typography variant="h5" fontWeight={700} maxWidth={"538px"} mx={"auto"}>
        Exploring the Advantages of Citizenship and Residency by Investment
      </Typography>
      <Typography variant="body2" maxWidth={"538px"} mx={"auto"} my={5}>
        Explore how our exclusive citizenship and residency-by-investment
        programs can elevate your quality of life. Unlock new opportunities,
        enjoy global security, and benefit from tax advantages tailored to align
        with your personal and professional aspirations.
      </Typography>
      <ApplyForCitizenship />
    </Box>
  );
};

export default ExploreAdvantages;
