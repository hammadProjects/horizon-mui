import React from "react";
import { Stack, Link, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import PublicIcon from "@mui/icons-material/Public";
import DifferenceIcon from "@mui/icons-material/Difference";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";

const NavItems = [
  { name: "All countries", icon: <PublicIcon /> },
  { name: "Compare", icon: <DifferenceIcon /> },
  { name: "All passports", ison: <MenuBookIcon /> },
  { name: "About", icon: <InfoIcon /> },
];

const NavLinks = ({ isActive, setIsActive }) => {
  return (
    <Grid
      bgcolor={"#D1D9E8"}
      container
      justifyContent={{ md: "space-evenly" }}
      alignItems={{ xs: "center", md: "" }}
    >
      {NavItems.map((item, index) => (
        <Grid key={index} size={{ xs: 8, md: 2 }} mx={{ xs: "auto", md: 0 }}>
          <Typography
            onClick={() => {
              console.log(index);
              setIsActive(index);
            }}
            sx={{
              py: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              color: isActive == index ? "white" : "#0E2A3F",
              backgroundColor: isActive == index ? "#4C6275" : "transparent",
            }}
          >
            <IconButton sx={{ color: isActive == index ? "white" : "#0E2A3F" }}>
              {item.icon}
            </IconButton>{" "}
            {item.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default NavLinks;
