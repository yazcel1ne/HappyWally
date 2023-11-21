import { React, Fragment } from "react";
import { Grid, Box, Typography, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const bgrimage = {
  background: "#Fcfcfc",
};

const Footer = () => {
  const navigate = useNavigate();

  const handleTermsClick = () => {
    navigate("/Terms");
  };

  const handlePrivacyClick = () => {
    navigate("/Privacy");
  };

  return (
    <Fragment>
      <Box style={bgrimage}>
        <Box
          sx={{
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="/logo.png" alt="Logo" width="200" height="auto" />
        </Box>

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
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-end",
                  lg: "flex-end",
                },
              }}
            >
              <Box sx={{ display: "flex", gap: "8px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C16.4183 2 20 6.00258 20 10.5C20 14.9622 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.9622 4 10.5C4 6.00258 7.58172 2 12 2ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z"
                    fill="#FC9E22"
                  />
                </svg>
                <Typography variant="body1">
                  433 Collins Street, Melbourne Australia
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
              }}
            >
              <Box sx={{ display: "flex", gap: "8px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.17157 5.38178C2 6.55335 2 8.43897 2 12.2102C2 15.9814 2 17.8671 3.17157 19.0386C4.34315 20.2102 6.22876 20.2102 10 20.2102H14C17.7712 20.2102 19.6569 20.2102 20.8284 19.0386C22 17.8671 22 15.9814 22 12.2102C22 8.43897 22 6.55335 20.8284 5.38178C19.6569 4.21021 17.7712 4.21021 14 4.21021H10C6.22876 4.21021 4.34315 4.21021 3.17157 5.38178ZM18.5762 7.73007C18.8413 8.04827 18.7983 8.5212 18.4801 8.78637L16.2837 10.6168C15.3973 11.3554 14.6789 11.9541 14.0448 12.3619C13.3843 12.7867 12.7411 13.0551 12 13.0551C11.2589 13.0551 10.6157 12.7867 9.95518 12.3619C9.32112 11.9541 8.60271 11.3554 7.71636 10.6168L5.51986 8.78637C5.20165 8.5212 5.15866 8.04827 5.42383 7.73007C5.68901 7.41186 6.16193 7.36887 6.48014 7.63404L8.63903 9.43312C9.57199 10.2106 10.2197 10.7486 10.7666 11.1003C11.2959 11.4408 11.6549 11.5551 12 11.5551C12.3451 11.5551 12.7041 11.4408 13.2334 11.1003C13.7803 10.7486 14.428 10.2106 15.361 9.43312L17.5199 7.63404C17.8381 7.36887 18.311 7.41186 18.5762 7.73007Z"
                    fill="#FC9E22"
                  />
                </svg>
                <Typography variant="body1">support@happywally.com</Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <Divider style={{ backgroundColor: "#000", height: "1px" }} />
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid
                item
                sm={12}
                xs={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-end",
                    lg: "flex-end",
                  },
                }}
              >
                <Button
                  href="#"
                  variant="h6"
                  color="inherit"
                  underline="none"
                  onClick={handleTermsClick}
                >
                  Terms & Conditions
                </Button>
              </Grid>
              <Grid
                item
                sm={12}
                xs={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                }}
              >
                <Button
                  href="#"
                  color="inherit"
                  underline="none"
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  onClick={handlePrivacyClick}
                >
                  Privacy Policy{" "}
                </Button>
              </Grid>
            </Grid>
            <Typography
              variant="caption"
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
                paddingBottom: "20px",
                textAlign: "center",
              }}
            >
              Copyright © Happy Wally 2023. All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Footer;
