import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  ThemeProvider,
  Card,
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";



const Brighten = () => {

  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = boxRef.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <Box
      ref={boxRef}
      sx={{
        opacity: isVisible ? 2 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        transition: "opacity 2s ease, transform 2s ease",
      }}
    >
      <Box
        sx={{
          paddingLeft: {
            xs: "16px",
            sm: "32px",
            md: "64px",
            lg: "250px",
          },
          paddingRight: {
            xs: "16px",
            sm: "32px",
            md: "64px",
            lg: "250px",
          },
          paddingTop: {
            xs: "50px",
            sm: "50px",
            md: "50px",
            lg: "50px",
          },
          paddingBottom: {
            xs: "50px",
            sm: "50px",
            md: "50px",
            lg: "50px",
          },
        }}
      
      >
        <Grid container rowSpacing={4} columnSpacing={16}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  },
                }}
              >
                Brigthen Your Day!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  },
                }}
              >
                Happy Wally is a chatbot that aims to make you smile. Whatever
                you want to talk about, Happy Wally is all ears anytime and
                anywhere you want. Watch the video and get to know more about
                Wally. Perhaps afterward, he’ll get the chance to know about you
                too.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Container maxWidth="md">
                <video
                  width="100%"
                  controls
                  style={{ borderRadius: "20px" }} // Adjust the border radius as needed
                >
                  <source src="/happy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Brighten;
