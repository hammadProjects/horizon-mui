import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import icon1 from "../../assets/ProcessPage/icon1.svg";
import icon2 from "../../assets/ProcessPage/icon2.svg";
import icon3 from "../../assets/ProcessPage/icon3.svg";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";

const stepItems = [
  {
    label: "Cityzenship by investment",
    img: icon1,
  },
  {
    label: "Residency by investment",
    img: icon2,
  },
  {
    label: "Get more information",
    img: icon3,
  },
];

const StepsNavigator = () => {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      borderBottom={"4px solid #0E2A3F"}
      mx={{ xs: 3, sm: 7, md: 12 }}
      mb={7}
    >
      {stepItems.map((step, index) => (
        <Grid
          size={{ xs: 12, md: 3, lg: 4 }}
          px={2}
          py={3}
          borderRight={{ md: index != 2 ? "3px solid #0E2A3F" : "" }}
        >
          <StepCard key={index} label={step.label} img={step.img} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StepsNavigator;

const StepCard = ({ img, label }) => {
  return (
    <>
      <Image src={img} width={"27px"} />
      <Stack direction={"row"} spacing={"8px"}>
        <Typography variant="body2" color="#0E2A3F" fontWeight="500">
          {label}
        </Typography>
        <ArrowRightAltIcon />
      </Stack>
    </>
  );
};
