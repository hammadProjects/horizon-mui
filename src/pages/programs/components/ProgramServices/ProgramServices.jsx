import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

const serviceItems = [
  { index: 1, title: "Citizenship" },
  { index: 2, title: "Residency" },
];

const ProgramServices = () => {
  return (
    <Box px={{ xs: 5, md: 15 }} py={10} color={"#0E2A3F"}>
      <Stack maxWidth={"530px"} mb={5}>
        <Typography color="#B69F71">OUR SERVICES</Typography>
        <Typography
          fontFamily={"TabacG1-Bold"}
          variant="h4"
          fontWeight={700}
          my={4}
        >
          Unlocking Global{" "}
          <span style={{ fontWeight: 600, fontStyle: "italic" }}>
            Opportunities:
          </span>{" "}
          Tailored Solutions for Modern Living
        </Typography>
        <Typography variant="body2">
          At Horizon, we offer more than a program; we provide a comprehensive
          solution that transforms your freedom of mobility and global
          opportunities. Our approach is designed specifically for
          forward-thinking individuals who seek security, stability and unique
          advantages for themselves and their families.
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        spacing={5}
      >
        {serviceItems.map((itemLinks) => (
          <ServiceCard index={itemLinks.index} title={itemLinks.title} />
        ))}
      </Stack>
    </Box>
  );
};

export default ProgramServices;

const ServiceCard = ({ index, title }) => {
  return (
    <Card
      sx={{
        boxShadow: 0,
        width: "100%",
        maxWidth: "565px",
        borderRadius: 0,
        py: 1,
        px: 5,
      }}
    >
      <CardContent>
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
          {index}
        </Typography>
        <Typography fontFamily={"TabacG1-Bold"} variant="h5" fontWeight={700}>
          Program: <br />
          {title} by{" "}
          <span style={{ fontStyle: "italic", fontWeight: 500 }}>
            investment
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};
