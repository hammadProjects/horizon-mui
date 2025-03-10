import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import mapImg from "@/assets/Mapa 01 1.png";
import Image from "next/image";
import React from "react";

import { StyledRank } from "../PassportCard/PassportCard";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";

const countries = [
  { label: "United States", id: 1 },
  { label: "Canada", id: 2 },
  { label: "Mexico", id: 3 },
  { label: "Brazil", id: 4 },
  { label: "United Kingdom", id: 5 },
  { label: "Germany", id: 6 },
  { label: "France", id: 7 },
  { label: "Italy", id: 8 },
  { label: "Spain", id: 9 },
  { label: "Australia", id: 10 },
  { label: "India", id: 11 },
  { label: "China", id: 12 },
  { label: "Japan", id: 13 },
  { label: "South Korea", id: 14 },
  { label: "Russia", id: 15 },
  { label: "South Africa", id: 16 },
  { label: "Argentina", id: 17 },
  { label: "Chile", id: 18 },
  { label: "Nigeria", id: 19 },
  { label: "Egypt", id: 20 },
  { label: "Saudi Arabia", id: 21 },
  { label: "Turkey", id: 22 },
  { label: "Thailand", id: 23 },
  { label: "Vietnam", id: 24 },
  { label: "Indonesia", id: 25 },
  { label: "Malaysia", id: 26 },
  { label: "Singapore", id: 27 },
  { label: "Pakistan", id: 28 },
  { label: "Bangladesh", id: 29 },
  { label: "Philippines", id: 30 },
  { label: "New Zealand", id: 31 },
  { label: "Sweden", id: 32 },
  { label: "Norway", id: 33 },
  { label: "Denmark", id: 34 },
  { label: "Finland", id: 35 },
  { label: "Netherlands", id: 36 },
  { label: "Belgium", id: 37 },
  { label: "Switzerland", id: 38 },
  { label: "Austria", id: 39 },
  { label: "Poland", id: 40 },
  { label: "Czech Republic", id: 41 },
  { label: "Hungary", id: 42 },
  { label: "Greece", id: 43 },
  { label: "Portugal", id: 44 },
  { label: "Romania", id: 45 },
  { label: "Bulgaria", id: 46 },
  { label: "Ukraine", id: 47 },
  { label: "Israel", id: 48 },
  { label: "Jordan", id: 49 },
  { label: "Lebanon", id: 50 },
];

const AllCountries = () => {
  const IconsArr = [
    <StarOutlineIcon />,
    <TaskAltIcon />,
    <CancelIcon />,
    <InfoIcon />,
  ];

  return (
    <Grid container bgcolor={"#D1D9E8"} px={{ xs: 0, md: 12.5 }}>
      <Grid
        size={{ xs: 12, md: 8 }}
        border="2px solid #0E2A3F"
        backgroundColor="#E6ECF2"
      >
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          py={"28px"}
        >
          <Typography variant="h6" fontWeight="700">
            World
          </Typography>
          <Autocomplete
            disablePortal
            options={countries}
            sx={{ width: "240px" }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Countries" />
            )}
          />
        </Stack>
        <Box borderTop={4} borderColor="#1A3B59" paddingTop={2} p={"60px"}>
          <Image
            src={mapImg}
            alt="map"
            style={{ maxWidth: "685px" }}
            layout="responsive"
          />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }} p={3}>
        <Box mb={3} bgcolor={"#FFF"} maxWidth={"240px"} p={3}>
          <StyledRank text={"Rank"} bg={"#1A3B59"} count={57} />
        </Box>
        <Box mb={3} bgcolor={"#FFF"} maxWidth={"240px"} p={3}>
          <StyledRank text={"Rank"} bg={"#1A3B59"} count={57} />
        </Box>
        <Box mb={3} bgcolor={"#FFF"} maxWidth={"240px"} p={3}>
          <StyledRank text={"Rank"} bg={"#1A3B59"} count={57} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AllCountries;
