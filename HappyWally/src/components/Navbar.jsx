import React, { useState, Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-scroll";
import { bodyText } from "./fonts";
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [menuAnchor, setMenuAnchor] = useState(null);

  const openMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  const isOnOtherPage = window.location.pathname !== '/';

  const navigate = useNavigate();


  const handleLogoClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/#about-section');
  };

  const handleFeaturesClick = () => {
    navigate('/#features-section');
  };

  const handleDownloadClick = () => {
    navigate('/#download-section');
  };

  


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
          }}
        >
          <Box>
            <AppBar position="relative">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "24px",
                }}
              >
                <Button onClick={handleLogoClick}>
                  <img
                    src="/logo.png"
                    alt="Logo"
                    width="150"
                    height="auto"
                  />
                </Button>
                {isSmallScreen ? (
                  <Fragment>
                    <IconButton
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={openMenu}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      anchorEl={menuAnchor}
                      open={Boolean(menuAnchor)}
                      onClose={closeMenu}
                    >
                      <MenuItem onClick={closeMenu}>
                        <Link to="about-section" smooth={true} duration={800}>
                          <Button sx={bodyText} onClick={handleAboutClick}>About</Button>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={closeMenu}>
                        <Link
                          to="features-section"
                          smooth={true}
                          duration={800}
                        >
                          <Button sx={bodyText} onClick={handleFeaturesClick}>Features</Button>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={closeMenu}>
                        <Link
                          to="download-section"
                          smooth={true}
                          duration={800}
                        >
                          <Button sx={bodyText} onClick={handleDownloadClick}>Download</Button>
                        </Link>
                      </MenuItem>
                    </Menu>
                  </Fragment>
                ) : (
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Link to="about-section" smooth={true} duration={800}>
                      <Button sx={bodyText} onClick={handleAboutClick}>About</Button>
                    </Link>
                    <Link to="features-section" smooth={true} duration={800}>
                      <Button sx={bodyText} onClick={handleFeaturesClick}>Features</Button>
                    </Link>
                    <Link to="download-section" smooth={true} duration={800}>
                      <Button
                        variant="contained"
                        style={bodyText}
                        sx={{ borderRadius: "30px" }}
                        onClick={handleDownloadClick}
                      >
                        DOWNLOAD
                      </Button>
                    </Link>
                  </Box>
                )}
              </Box>
            </AppBar>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}



export default NavBar;
