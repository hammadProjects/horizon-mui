import { Box, Typography } from "@mui/material";

const InvestBenefitCard = ({ label, image, customHeight, customWidth }) => {
  return (
    <Box
      sx={{
        width: "360px",
        height: "497px",
        backgroundColor: "#0E2A3F",
        color: "#FFFFFF",
        display: "flex", 
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: "42px",
        padding: "0px 0px 84px 56px",
        boxSizing: "border-box"
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          width: `${customHeight}`,
          height: `${customWidth}`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Typography sx={{fontSize: "20px", fontWeight: "700"}}>{label}</Typography>
    </Box>
  );
};

export default InvestBenefitCard;
