import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Header from "@/_components/Header/Header";
import Divider from "@/_components/Divider/Divider";
import NavLinks from "./component/NavLinks/NavLinks";
import AboutPassport from "./component/AboutPassport/AboutPassport";

import PassportCard from "./component/PassportCard/PassportCard";
import Footer from "@/_components/Footer/Footer";
import AllCountries from "./component/AllCountries/AllCountries";
import VisaChecker from "./component/Compare/VisaChecker";
import AllPassports from "./component/AllPassports/AllPassports";

const PassportPage = () => {
  const [isActive, setIsActive] = useState(0);
  const componentArray = [
    <AllCountries />,
    <VisaChecker />,
    <AllPassports />,
    <AboutPassport />,
  ];

  return (
    <Box bgcolor={"#FDFDFD"}>
      <Header />
      <Divider />
      <Typography
        variant="body1"
        maxWidth="569px"
        width={"100%"}
        fontWeight="600"
        my={"100px"}
        mx={"auto"}
        px={{ xs: 2, sm: 0 }}
      >
        Explore the world of global mobility with our Passport Index. Compare
        the strength of passports from different countries, including visa-free
        access and travel opportunities.
      </Typography>
      <NavLinks isActive={isActive} setIsActive={setIsActive} />
      <Box>{componentArray[isActive]}</Box>
      <Footer />
    </Box>
  );
};

export default PassportPage;
