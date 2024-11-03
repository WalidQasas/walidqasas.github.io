import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Nunito Sans",
        fontWeightRegular: 300,
        fontWeightMedium: 600,
        fontWeightBold: 800,
        colorDark: "#111517",
        colorMedium: "#858585",
        colorLight: "#fafafa",
        // The following are general styles that will be used throughout our project
        h1: {
            fontSize: "18px",
            fontWeight: 800,
        },
        h2: {
            fontSize: "16px",
            fontWeight: 800,
        },
        p: {
            fontSize: "14px",
            fontWeight: 400,
        },
        body1: {
            fontSize: "14px",
            fontWeight: 600,
        },
        body2: {
            fontSize: "14px",
            fontWeight: 300,
        },

        // The following are some specific styles for the Country Details component
        h3: {
            fontSize: "32px",
            fontWeight: 800,
        },
        body3: {
            fontSize: "16px",
            fontWeight: 600,
        },
        body4: {
            fontSize: "16px",
            fontWeight: 300,
        },
      
    },
});

export default theme;
