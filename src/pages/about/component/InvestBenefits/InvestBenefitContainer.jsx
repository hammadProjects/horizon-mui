import { Box, Container } from "@mui/material";
import InvestBenefitCard from "./InvestBenefitCard";
import dollar from "../../assets/dollar.svg";
import shakeHand from "../../assets/hand-shake.svg";
import qualityOfLife from "../../assets/quality-of-life.svg";
import Arrows from "./Arrows";
// import Arrows from "./Arrows";

const InvestBenefitList = [
  {
    image: dollar,
    label: "Economic growth",
    height: "68px",
    width: "68px",
  },
  {
    image: shakeHand,
    label: "Strategic opportunities",
    height: "99px",
    width: "65px",
  },
  {
    image: qualityOfLife,
    label: "Quality of life",
    height: "62px",
    width: "67px",
  },
];

const InvestBenefitContainer = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", marginBottom: "25px" }}>
        {InvestBenefitList.map((benefit, i) => (
          <InvestBenefitCard
            key={i}
            image={benefit.image}
            label={benefit.label}
            customHeight={benefit.height}
            customWidth={benefit.width}
          />
        ))}
      </Box>
      <Arrows />
    </Container>
  );
};

export default InvestBenefitContainer;
