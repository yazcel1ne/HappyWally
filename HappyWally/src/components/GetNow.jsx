import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  Button,
  CardContent,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";



const cardStyle = {
  maxWidth: 400,
  margin: "0 auto",
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

const GetNow = () => {
  const isXSOrSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
            xs: "20px",
            sm: "20px",
            md: "50px",
            lg: "50px",
          },
        }}
     
      >
        <Grid container rowSpacing={4} columnSpacing={8}>
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
              <Typography variant="h1" sx={{ textAlign: "center" }}>
                Get the app now!
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                Get ready to smile a bunch with a split serving of joy and
                banana puns.
              </Typography>

              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: isXSOrSM ? "center" : "center",
                  flexDirection: isXSOrSM ? "column" : "row",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://apps.apple.com/ua/app/happy-wally/id6449672858?l"
                  target="_blank"
                >
                  <Button>
                    <img src="/apple.png" alt="Clickable Image" />
                  </Button>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.virtualworxs.happywally&pli=1"
                  target="_blank"
                >
                  <Button>
                    <img src="/google.png" alt="Clickable Image" />
                  </Button>
                </a>
              </Box>
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
            <Card style={cardStyle}>
              <CardContent>
                <img
                  src="/121.png"
                  alt="Responsive Image"
                  style={imageStyle}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default GetNow;
