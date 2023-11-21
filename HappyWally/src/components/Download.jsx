import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Box,
  Typography,
  Button,
  CardContent,
  Paper,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const bgrimage = {
  background: "linear-gradient(180deg, #FFE6A0 0%, #E9A142 100%)",
};

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

const Download = () => {
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
            paddingTop: {
              xs: "20px",
              sm: "20px",
              md: "20px",
              lg: "20px",
            },
            paddingBottom: {
              xs: "50px",
              sm: "50px",
              md: "50px",
              lg: "50px",
            },
          }}
        >
          <Paper
            style={bgrimage}
            sx={{
              paddingLeft: {
                xs: "16px",
                sm: "32px",
                md: "20px",
                lg: "20px",
              },
              paddingRight: {
                xs: "16px",
                sm: "32px",
                md: "20px",
                lg: "20px",
              },
              paddingTop: {
                xs: "50px",
                sm: "50px",
                md: "20px",
                lg: "20px",
              },
              paddingBottom: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "20px",
              },

              borderRadius: "20px",
              boxShadow: "none",
            }}
          >
            <Typography variant="h1" textAlign="center">
              Download the app today!
            </Typography>

            <Typography variant="body1" textAlign="center">
              Get ready to smile a bunch with a split serving of joy and banana
              puns.
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

            <Card style={cardStyle}>
              <CardContent>
                <img
                  src="/dl.png"
                  alt="Responsive Image"
                  style={imageStyle}
                />
              </CardContent>
            </Card>
          </Paper>
        </Box>
      </Box>

  );
};

export default Download;
