import Btn from "@/_components/Button/Btn";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const PassportClassification = () => {
  return (
    <Box bgcolor={"#DFE5ED"} px={{ xs: 10, md: 20 }} py={8}>
      <Typography
        fontWeight={700}
        variant="h4"
        fontFamily={"TabacG1-Bold"}
        sx={{
          position: "relative",
          ":before": {
            content: "''",
            display: "block",
            width: "15px",
            height: "15px",
            backgroundColor: "#B69F71",
            position: "absolute",
            top: -23,
            left: 0,
            transform: "rotate(45deg)",
          },
        }}
      >
        Know your
      </Typography>
      <Typography
        fontStyle={"italic"}
        fontWeight={700}
        variant="h4"
        fontFamily={"TabacG1-Bold"}
        borderBottom={"2px solid #0E2A3F"}
        pb={2}
      >
        Passort Classification
      </Typography>
      <Stack
        mt={5}
        direction={{ xs: "column", lg: "row" }}
        justifyContent={"space-between"}
        spacing={{ xs: 5, md: 7 }}
        alignItems={{lg: "flex-end"}}
      >
        <Typography variant="body1" maxWidth={"529px"}>
          Analyze the scope of your passport with our interactive index. Find
          out which destinations you can visit without restrictions and how it
          compares to other global passports.{" "}
        </Typography>
        <Box>
          <Btn label={"Know more"} clr={"#FFF"} bg={"#0E2A3F"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default PassportClassification;
