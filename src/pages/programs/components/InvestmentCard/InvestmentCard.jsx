import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const InvestmentCard = ({bgColor, step}) => {
  return (
    <Card
      sx={{
        maxWidth: "281px",
        borderRadius: 0,
        boxShadow: 0,
        backgroundColor: bgColor || "#FFF",
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={600} color="#5774A1" mb={3}>
          {step}
        </Typography>
        <Typography variant="body1" fontWeight={600} maxWidth={"159px"}>
          Freedom Across 143 Countries
        </Typography>
        <Typography variant="body2" my={2}>
          This program grants you the unparalleled right to live, work, travel,
          and study without limitations in 143 countries.{" "}
        </Typography>
        <Typography variant="body2" my={2}>
          This means you can enjoy seamless access to diverse opportunities.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InvestmentCard;
