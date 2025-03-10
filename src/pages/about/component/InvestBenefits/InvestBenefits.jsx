import { Box } from "@mui/material";
import InvestTitle from "./InvestTitle";
import InvestBenefitContainer from "./InvestBenefitContainer";
import AdvantagesOfCitizenship from "./AdvantagesOfCitizenship";

const InvestBenefits = () => {
  return (
    <Box sx={{ backgroundColor: "#F3F5F8", padding: "60px 0px 100px 0px", }}>
      <InvestTitle customMargin="0px 0px 50px 0px" />
      <InvestBenefitContainer />
      <AdvantagesOfCitizenship />
    </Box>
  );
};

export default InvestBenefits;
