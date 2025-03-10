import { Box, Container } from "@mui/material";
import GoalCard from "./GoalCard";
import video from "../../assets/video.svg"

const GoalSection = () => {
  return (
    <Container sx={{display: "flex", justifyContent: "space-around", alignItems: "center",padding: "83px 0px 70px 0px"}}>
      <Box component="img" sx={{backgroundImage: `url(${video})`, width: "259px", height: "459px", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} />
      <Box>
        <GoalCard
          label="Mission"
          description="To help our clients access a future without limits through personalized citizenship and residency by investment programs in Peru."
        />
        <Box
          sx={{
            backgroundColor: "#1C3661",
            width: "520px",
            height: "5px",
            margin: "50px 0px 62px 0px",
          }}
        />
        <GoalCard
          label="Vision"
          description="To help our clients access a future without limits through personalized citizenship and residency by investment programs in Peru."
        />
      </Box>
    </Container>
  );
};

export default GoalSection;
