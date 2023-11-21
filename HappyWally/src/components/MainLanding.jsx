import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import Features from "./features";
import Upcoming from "./Upcoming";
import Download from "./Download";
import Brighten from "./Brighten";
import About from "./About";
import GetNow from "./GetNow";
import Footer from "./Footer";
import BackTop from "./BackTop";

const backgroundImageUrl = "/bg2.jpg";

const bgStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundRepeat: "repeat",
  backgroundSize: "contain",
  backgroundAttachment: "fixed",
};

const MainLanding = () => (
  <Box style={bgStyle}>
    <Box id="main-landing">
      <HeroSection />
    </Box>

    <Box id="features-section">
      <Features />
    </Box>

    <Upcoming />

    <Box id="download-section">
      <Download />
    </Box>
    <Brighten />

    <Box id="about-section">
      <About />
    </Box>

    <GetNow />
    <Footer />
    <BackTop />
  </Box>
);

export default MainLanding;
