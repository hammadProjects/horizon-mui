import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "../pages/home/index";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <HomePage />
      </>
    </ThemeProvider>
  );
}
