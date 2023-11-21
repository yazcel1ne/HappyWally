import React, { useEffect, useRef, useState, Fragment } from "react";
import { Grid, Card, Box, Typography, CardContent } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const cardStyle = {
  maxWidth: 600,
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

const Upcoming = () => {
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
    <Fragment>
      <Box bgcolor="#FCFCFC">
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
                <Card style={cardStyle}>
                  <CardContent>
                    <img
                      src="/hw2.png"
                      alt="Responsive Image"
                      style={imageStyle}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box
                  sx={{
                    paddingTop: {
                      xs: "8px",
                      sm: "8px",
                      md: "100px",
                      lg: "100px",
                    },
                  }}
                >
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
                    Upcoming Feature!?
                  </Typography>
                  <Typography
                    variant="h2a"
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left",
                      },
                    }}
                  >
                    Happiness Report
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box
              sx={{
                paddingTop: {
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
                      How Happy Wally Works
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
                      Happy Wally stands out with its Emotion Sensing and
                      Empathetic Responses, utilizing advanced sentiment
                      analysis to understand users' emotions. Through this
                      exceptional feature, Happy Wally responds with genuine
                      empathy, offering comforting words during difficult times
                      or celebrating joys with you. Experience a truly
                      heartwarming and human-like chat interaction like never
                      before with Happy Wally.
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
                  <Card style={cardStyle}>
                    <CardContent>
                      <img
                        src="/hw5.png"
                        alt="Responsive Image"
                        style={imageStyle}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Upcoming;
