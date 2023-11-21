import { React, Fragment } from "react";
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

const HeroSection = () => {
  const isXSOrSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <Box bgcolor="#FCFCFC">
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

          paddingBottom: {
            xs: "8px",
            sm: "16px",
            md: "32px",
            lg: "48px",
          },

          paddingTop: {
            xs: "30px",
            sm: "30px",
            md: "0px",
            lg: "0px",
          },
        }}
      >
        <Grid container rowSpacing={1}>
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
              <Typography variant="h1a">GOING BANANAS?</Typography>
              <Box>
                <Typography variant="h2a">Let me help with that.</Typography>
              </Box>
              <Typography variant="body1">
                Happy Wally is a chatbot that aims to make you smile. Whatever
                you want to talk about, Happy Wally is all ears anytime and
                anywhere you want. Watch the video and get to know more about
                Wally. Perhaps afterward, he’ll get the chance to know about you
                too.
              </Typography>
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: isXSOrSM ? "center" : "center",
                  flexDirection: isXSOrSM ? "column" : "row",
                  justifyContent: "flex-start",
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
                  src="/hero2.png"
                  alt="Responsive Image"
                  style={imageStyle}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      </Box>
    </Fragment>
  );
};

export default HeroSection;
