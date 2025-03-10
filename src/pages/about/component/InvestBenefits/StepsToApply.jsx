import { Box, Container, Typography } from "@mui/material";
import video from "../../assets/steps-to-apply-video.png";
import Arrows from "./Arrows";

const StepsToApply = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#0E2A3F",
        color: "white",
        padding: "150px 10px"
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${video})`,
          width: "510px",
          height: "293px",
        }}
      />
      <Container sx={{ width: "50%" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", marginBottom: "26px" }}>
          Step-by-step: How to apply for the citizenship by investment program
        </Typography>
        <Box sx={{ height: "195px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Explore how our exclusive citizenship and residency-by-investment
            programs can elevate your quality of life. Unlock new opportunities,
            enjoy global security, and benefit from tax advantages tailored to
            align with your personal and professional aspirations.
          </Typography>
          {/* Arrows */}
          <Arrows bg={"#FFFFFF"} />
        </Box>
      </Container>
    </Container>
  );
};

export default StepsToApply;
