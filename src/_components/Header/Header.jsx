"use Client";
import React from "react";
import { AppBar, Box, Button, Link, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Btn from "../Button/Btn";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { useRouter } from "next/router";

const items = [
  { name: "AR", href: "/" },
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Programs", href: "/programs" },
  { name: "Process", href: "/process" },
  { name: "Blog", href: "/blog" },
];

function Header() {
  const route = useRouter();
  const isActive = (path) => path === route.pathname;

  return (
    <AppBar position="static" sx={{ backgroundColor: "#0E2A3F" }}>
      <Box textAlign={"center"}>
        <Logo customMargin="40px 0px 24px 0px" customWidth="133px" />
      </Box>
      <Grid container spacing={2} mb={1} alignItems={"center"}>
        <Grid item size={{ xs: 6, md: 8 }}>
          <Menu items={items} isActive={isActive} />
        </Grid>

        <Grid item size={{ xs: 6, md: 4 }} textAlign={"center"}>
          <Btn label="Apply now" bg="#B69F71" clr="#0E2A3F" />
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Header;
