import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BgImg from "../../../../assets/HomePage/different.png";

const AccordianItems = [
  {
    label: "Global Mobility Experts",
    desc: "Global Mobility Experts Global Mobility ExpertsGlobal Mobility Experts ",
    index: 0,
  },
  {
    label: "Legality and Security",
    desc: "Global Mobility Experts Global Mobility ExpertsGlobal Mobility Experts ",
    index: 1,
  },
  {
    label: "Transparent Processes",
    desc: "Global Mobility Experts Global Mobility ExpertsGlobal Mobility Experts ",
    index: 2,
  },
  {
    label: "Personalized attention",
    desc: "Global Mobility Experts Global Mobility ExpertsGlobal Mobility Experts ",
    index: 3,
  },
];

const Process = () => {
  const [accordianIndex, setAccordianIndex] = useState(null);
  return (
    <Grid
      container
      bgcolor={"#D1D9E7"}
      py={10}
      spacing={{ xs: 10 }}
      px={{ xs: 3, sm: 10, md: 10, lg: 20 }}
    >
      <Grid size={{ sm: 12, md: 7, lg: 6 }}>
        <Typography
          variant="h6"
          position={"relative"}
          textTransform={"uppercase"}
          ml={4}
          sx={{
            ":before": {
              content: "''",
              display: "block",
              width: "15px",
              height: "15px",
              backgroundColor: "#0E2A3F",
              position: "absolute",
              top: 6,
              left: "-30px",
              transform: "rotate(45deg)",
            },
          }}
        >
          What makes us different?
        </Typography>
        <Typography
          variant="h5"
          fontWeight={"600"}
          my={"12px"}
          width={{ xs: "100%", md: "180%" }}
          maxWidth={"492px"}
        >
          Our commitment to excellence and innovation shapes everything we do
        </Typography>
        {AccordianItems.map((item) => (
          <Accordian
            key={item.index}
            label={item.label}
            index={item.index}
            setAccordianIndex={setAccordianIndex}
            accordianIndex={accordianIndex}
            desc={item.desc}
          />
        ))}
      </Grid>
      <Grid size={{ xs: 12, md: 5, lg: 6 }} textAlign={"center"}>
        <Image
          src={BgImg}
          alt="Difference"
          layout="responsive"
          style={{
            minWidth: "300px",
            width: "100%",
            maxWidth: "450px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Process;

const Accordian = ({
  label,
  index,
  setAccordianIndex,
  accordianIndex,
  desc,
}) => {
  return (
    <Box borderBottom={index == accordianIndex ? "2px solid #5774A1" : ""}>
      <Stack
        maxWidth={"570px"}
        direction={"row"}
        borderBottom={index != accordianIndex ? "2px solid #5774A1" : ""}
        color={"#0E2A3F"}
        justifyContent={"space-between"}
        px={4}
        py={1}
        sx={{ cursor: "pointer" }}
        onClick={() =>
          setAccordianIndex(index !== accordianIndex ? index : null)
        }
      >
        <Typography variant="body2" fontWeight={500}>
          {label}
        </Typography>
        <Typography>+</Typography>
      </Stack>
      {index == accordianIndex ? (
        <Typography fontSize={"0.85rem"} py={1} px={4}>
          {desc}
        </Typography>
      ) : (
        <></>
      )}
    </Box>
  );
};
