import Header from '@/_components/Header/Header'
import HeroSection from '@/_components/HeroSection/HeroSection'
import { Box } from '@mui/material'
import React from 'react'
import ReviewHero from "../../assets/ReviewCase/ReviewHero.png"
import Footer from '@/_components/Footer/Footer'
import Evaluation from './components/Evaluation/Evaluation'
import Divider from '@/_components/Divider/Divider'
const index = () => {
  return (
    <Box>
        <Header />
        <Divider />
        <HeroSection label={"Review your case"} bgImg={ReviewHero.src} />
        <Evaluation />
        <Footer />
    </Box>
  )
}

export default index
