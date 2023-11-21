export const BREAKPOINTS = Object.freeze({
    mobile: 0, //xs
    tablet: 600, //sm
    laptop: 900, //md
    desktop: 1200, //lg
    largeDesktop: 1600, //xl
  });
  
  export const UIHELPER = Object.freeze({
    topBarHeight: "60px",
    drawerWidth: "187px",
    drawerWidthOpen: "45px",
    baseBg: "#F9F9F9",
  });
  
  export const TYPOGRAPHIES = Object.freeze({
    // fontFamily: ["Nunito"].join(","),
    // at: {
    //   fontSize: 18,
    //   color: "#000",
    //   fontStyle: "bold",
    // },
    h1: {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: "60px",
      color: '#FC9E22',
      "@media (max-width: 600px)": {
        fontSize: "36px",
      },
    },
    h1a: {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: "60px",
      color: '#FC9E22',
      "@media (max-width: 600px)": {
        fontSize: "36px",
      },
    },
    h2a: {
      fontFamily: "Nunito ",
      fontWeight: 700,
      fontSize: "48px",
      "@media (max-width: 600px)": {
        fontWeight: 700,
        fontSize: "24px",
      },
    },
    h3: {
      fontFamily: "Nunito ",
      fontWeight: 400,
      fontSize: "48px",
    },
    h4: {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: "34px",
      "@media (max-width: 600px)": {
        fontWeight: 700,
        fontSize: "24px",
      },
    },
    h4l: {
      fontFamily: "Nunito",
      fontWeight: 500,
      fontSize: "34px",
    },
    h5: {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: "30px",
      "@media (max-width: 600px)": {
        fontWeight: 700,
        fontSize: "24px",
      },
    },
    h6: {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: "20px",
    },
    subtitle1: {
      fontFamily: "Nunito",
      fontWeight: 400,
      fontSize: "16px",
    },
    subtitle2: {
      fontFamily: "Nunito",
      fontWeight: 400,
      fontSize: "14px",
    },
    body1: {
      fontFamily: "Nunito",
      fontWeight: 400,
      fontSize: "16px",
      "@media (max-width: 600px)": {
        fontSize: "14px",
      },
    },
    body1Bold: {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: "16px",
    },
    button: {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: "15px",
    },
    caption: {
      fontFamily: "Nunito",
      fontWeight: 400,
      fontSize: "12px",
    },
    overline: {
      fontFamily: "Nunito",
      fontWeight: 400,
      fontSize: "12px",
    },
  });