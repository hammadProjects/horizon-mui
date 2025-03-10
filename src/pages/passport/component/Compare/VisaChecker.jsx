import React, { useState } from "react";
import { Box, Select, MenuItem, Typography, Paper, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { countries, visaData } from "@/utils/data";
import Image from "next/image";

const CountryList = () => {
  return (
    <Box maxWidth={"250px"} bgcolor={"#FFF"}>
      <Typography
        variant="body2"
        fontWeight={600}
        textAlign={"center"}
        pt={"12px"}
        pb={"40px"}
        borderBottom={"1px solid black"}
      >
        Countries
      </Typography>
      <Box p={1} mt={2} maxHeight={"585px"} sx={{ overflowY: "scroll" }}>
        {countries.map((country, index) => (
          <Stack
            height={"30px"}
            mt={1}
            key={index}
            direction={"row"}
            maxWidth={"250px"}
            alignItems={"center"}
            spacing={2}
          >
            <Image
              src={country.flag}
              alt={country.name}
              width={20}
              height={13}
            />
            <Typography>{country.name}</Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

const PassportSelector = ({ selectedPassport, setSelectedPassport }) => {
  const [visaFreeCount, setVisaFreeCount] = useState("");
  return (
    <Box textAlign={"center"} py={1} borderBottom={"1px solid black"}>
      <Select
        value={selectedPassport || ""}
        onChange={(e) => {
          setSelectedPassport(e.target.value);
        }}
        displayEmpty
        sx={{ width: "200px", height: "35px", borderRadius: 0 }}
      >
        <MenuItem disabled>Select passport</MenuItem>
        {visaData.map((country) => {
          return (
            <MenuItem key={country.name} value={country.name}>
              {country.name}
            </MenuItem>
          );
        })}
      </Select>
      <Typography variant="body1">
        Visa free score: {visaFreeCount || "N/A"}
      </Typography>
    </Box>
  );
};

const VisaChecker = () => {
  const [selectedPassport, setSelectedPassport] = useState("");

  return (
    <Grid
      container
      spacing={2}
      bgcolor={"#D1D9E8"}
      px={{ xs: 3, sm: 6, md: 20 }}
      py={5}
    >
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <CountryList />
      </Grid>

      <Grid
        bgcolor={"#FFF"}
        size={{ xs: 12, sm: 6, md: 3 }}
        maxHeight={"586px"}
      >
        <PassportSelector
          selectedPassport={selectedPassport}
          setSelectedPassport={setSelectedPassport}
        />
        {selectedPassport ? (
          <Box
            color={"#FFF"}
            sx={{ overflowY: "scroll" }}
            maxHeight={"585px"}
            my={2}
          >
            {visaData[0].countries.map((item) => {
              return item ? (
                <Box
                  mt={1}
                  textAlign={"center"}
                  bgcolor={"green"}
                  height={"30px"}
                  width={"100%"}
                >
                  Visa Free
                </Box>
              ) : (
                <Box
                  mt={1}
                  textAlign={"center"}
                  bgcolor={"red"}
                  height={"30px"}
                  maxWidth={"100%"}
                >
                  Visa required
                </Box>
              );
            })}
          </Box>
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

export default VisaChecker;
