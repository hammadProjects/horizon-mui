import { Box, Typography } from "@mui/material";
import RotatedBox from "../RotatedBox";

const InvestTitle = ({ customMargin }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "22px",
        margin: `${customMargin}`,
      }}
    >
      <Typography
        sx={{ fontSize: "18px", fontWeight: "500", color: "#B69F71" }}
      >
        WHY INVEST IN PERU
      </Typography>
      <RotatedBox />
      <Typography
        sx={{
          width: "402px",
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "600",
          color: "#1C3661",
        }}
      >
        Embrace a future without limits with simplified and accessible
        citizenship services for everyone.
      </Typography>
    </Box>
  );
};

export default InvestTitle;
