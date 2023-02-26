import React, { useEffect } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

// import Preloader from "./Preloader";


const HeroBanner = () => {

   useEffect(() => {
     const text = document.querySelector(".testtt");

     const handleScroll = () => {
       const move = window.scrollY / 2;
       text.style.marginLeft = `${move}px`;
     };
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >

      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        FitnessClub
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="25px" mt="10px">
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px 15px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        ml="0px"
        fontWeight="600"
        color="#FF2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
        className="testtt"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner
