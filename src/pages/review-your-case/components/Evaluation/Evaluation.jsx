import Btn from "@/_components/Button/Btn";
import { Box, Typography } from "@mui/material";
import React from "react";

const Evaluation = () => {
  return (
    <Box py={10} textAlign={"center"} color={"#0E2A3F"}>
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ textDecoration: "underline" }}
      >
        Evaluation tool
      </Typography>
      <Box maxWidth={"634px"} my={10} mx={"auto"}>
        <Typography variant="h6" fontWeight={600}>
          We invite you to complete a complimentary assessment to identify the
          best immigration destination for your needs.
        </Typography>
        <Typography variant="h6" my={3}>
          Press 'Continue' to begin.
        </Typography>
        <Typography
          variant="h6"
          fontWeight={700}
          color="#5774A1"
          maxWidth={"400px"}
          mx={"auto"}
        >
          This process does not require you to provide personal information.
        </Typography>
      </Box>
      <Btn label={"Continue"} clr={"#FFF"} bg={"#0E2A3F"} />
    </Box>
  );
};

export default Evaluation;
