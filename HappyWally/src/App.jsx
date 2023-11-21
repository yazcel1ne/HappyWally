import React from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { TYPOGRAPHIES } from "./components/globalStyles";
import MainLanding from "./components/mainLanding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Privacy from "./pages/Privacy";
import BackTop from "./components/BackTop";
import Terms from "./pages/Terms";

const mytheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FC9E22",
    },
    secondary: {
      main: "#FDC23B",
    },
    tertiary: {
      main: "#1B1212",
    },
    background: {
      default: "#FCFCFC",
    },
    success: {
      main: "#28B463",
    },
    error: {
      main: "#E74C3C",
    },
    info: {
      main: "#3498DB",
    },
  },

  typography: {
    ...TYPOGRAPHIES,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          borderRadius: "20px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "#000000",
          },
        },
      },
    },
  },
});

const App = () => (
  <ThemeProvider theme={mytheme}>

    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} 
        />
      </Routes>
    </Router>
    <BackTop />
  </ThemeProvider>
);

export default App;
