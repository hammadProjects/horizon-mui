import { Autocomplete, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import PassportCard from "../PassportCard/PassportCard";

const AllPassports = () => {
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

  return (
    <Box px={{ xs: 3, sm: 6, md: 10 }} py={3} bgcolor={"#D1D9E8"}>
      <Box>
        <Autocomplete
          disablePortal
          options={countries}
          sx={{ width: "240px", marginY: "50px" }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Select Passport" />
          )}
        />
      </Box>
      <Grid container spacing={2} justifyContent={{ md: "space-between" }}>
        <Grid size={{ xs: 12, sm: 5.6, md: 3.9 }}>
          <PassportCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 3.9 }}>
          <PassportCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 3.9 }}>
          <PassportCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 5.6, md: 3.9 }}>
          <PassportCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllPassports;
