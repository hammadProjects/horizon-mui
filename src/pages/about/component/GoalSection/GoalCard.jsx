import { Box, Typography } from "@mui/material";
import RotatedBox from "../RotatedBox"

const GoalCard = ({ label, description }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16.79px",
        }}
      >
        <RotatedBox />
        <Typography sx={{ fontSize: "45px", color: "#1C3661", fontFamily: "TabacG1-Bold" }}>
          {label}
        </Typography>
      </Box>
      <Typography
        sx={{ fontSize: "14px", fontWeight: "500", width: "425px" }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default GoalCard;
