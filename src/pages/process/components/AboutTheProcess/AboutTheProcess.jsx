import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Stack, Typography } from "@mui/material";
import Btn from "@/_components/Button/Btn";

const processSteps = [
  {
    index: 1,
    label: "First: Complete the Screening Process",
    description:
      "Citizenship-by-investment programs offer families the opportunity to acquire an alternative second citizenship, granting access to a wide range of valuable benefits.",
  },
  {
    index: null,
    label: "First: Complete the Screening Process",
    description:
      "Citizenship-by-investment programs offer families the opportunity to acquire an alternative second citizenship, granting access to a wide range of valuable benefits.",
  },
  {
    index: 2,
    label: "Choose Your Investment Option",
    description: "",
  },
  {
    index: 3,
    label: "Prepare and Submit Your Documentation",
    description:
      "Submit the required documents to ensure the efficient processing of your application.",
  },
  {
    index: 4,
    label: "Approval of Your Application",
    description:
      "Obtain confirmation and proceed to the next step in securing your residency.",
  },
  {
    index: 5,
    label: "Obtain Your Residency Visa in Just 60 Days",
    description:
      "Embrace the advantages of residency as you explore new opportunities in Peru.",
  },
  {
    index: 6,
    label: "Complete Biometric Registration",
    description:
      "Complete the registration of your biometric data and have your photo taken to finalize your residency.",
  },
  {
    index: 7,
    label: "Maintain Your Resident Status",
    description:
      "Travel to Peru every six months throughout the two-year period to fulfill residency requirements.",
  },
  {
    index: 8,
    label: "Achieve Citizenship and a Peruvian Passport After Two Years",
    description:
      "Unlock the full benefits of Peruvian citizenship, including improved mobility and access to opportunities in various desirable countries around the world.",
  },
];

const AboutTheProcess = ({ label }) => {
  return (
    <Grid container bgcolor="#E1E8F3" py={10} px={{ xs: 3, md: 5, lg: 10 }}>
      <Grid size={{ xs: 12, sm: 12, md: 6 }}>
        <Typography variant="subtitle1">ABOUT THE PROCESS</Typography>
        <Typography
          fontFamily="TabacG1-Bold"
          variant="h4"
          fontWeight={700}
          my={4}
        >
          Program: <br />
          {label || "Citizenship"} by{" "}
          <span style={{ fontWeight: 500 }}>investment</span>
        </Typography>
        <Typography maxWidth="353px" variant="subtitle2" my={3}>
          Achieve Peruvian citizenship and a passport within two years through
          the flexible investment options available in the country’s Investor
          Program.
        </Typography>
        <Box mt="14px">
          <Btn label={"Know more"} bg="#0E2A3F" clr="#FFFFFF" />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6 }}>
        {processSteps.map((step, index) => {
          return (
            <Stack
              direction="row"
              mt={{xs: 7, md: 2}}
              key={index}
              color="#0E2A3F"
              spacing={5}
            >
              <Typography variant="h3" color="#4682B4">
                {step.index}
              </Typography>
              <Stack maxWidth={"493px"}>
                {" "}
                <Typography variant="subtitle2" fontWeight="700">
                  {step.label}
                </Typography>
                <Typography variant="subtitle2" fontWeight="400">
                  {step.description}
                </Typography>
                {}
              </Stack>
            </Stack>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default AboutTheProcess;
