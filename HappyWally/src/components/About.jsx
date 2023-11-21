import React, { useEffect, useRef, useState, Fragment } from "react";

import { Grid, Card, Box, Typography, CardContent } from "@mui/material";

const cardStyle = {
  maxWidth: 600,
  margin: "0 auto",
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

const bgrimage = {
  background:
    "linear-gradient(180deg, #FFF7E3 0%, rgba(251, 237, 197, 0.02) 64.06%)",
};

const About = () => {
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
          <Box>
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
                        src="/abt.png"
                        alt="Responsive Image"
                        style={imageStyle}
                      />
                    </CardContent>
                  </Card>
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
                      About Happy Wally
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "left",
                          lg: "left",
                        },
                      }}
                    >
                      {" "}
                      Who is Happy Wally?{" "}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        paddingTop: "24px",
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "left",
                          lg: "left",
                        },
                      }}
                    >
                      I am a monkey with a lot of joy to give. If you’re feeling
                      down, stressed, or just plain bored, you can always hang
                      out with me.
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        paddingTop: "24px",
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "left",
                          lg: "left",
                        },
                      }}
                    >
                      I have a lot of space on my tree. I’ve got jokes, I’ve got
                      stories, and I’ve got fun activities you can try in your
                      free time (and bananas, of course, can’t forget that).
                      Don’t worry about getting too chatty, I have all the time
                      in the world for you.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default About;
