import { Box, Typography } from "@mui/material";
import RotatedBox from "../RotatedBox";

const AdvantagesTitle = () => {
  return (
    <Box sx={{padding: "0px 0px 20px 100px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "21.79px", marginBottom: "38px" }}>
        <RotatedBox />
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            width: "554px",
            lineHeight: "34px",
          }}
        >
          Exploring the Advantages of Citizenship and Residency by Investment
        </Typography>
      </Box>
      <Typography sx={{fontSize: "14px", fontWeight: "400", width: "538px "}}>
        Explore how our exclusive citizenship and residency-by-investment
        programs can elevate your quality of life. Unlock new opportunities,
        enjoy global security, and benefit from tax advantages tailored to align
        with your personal and professional aspirations.
      </Typography>
    </Box>
  );
};

export default AdvantagesTitle;
