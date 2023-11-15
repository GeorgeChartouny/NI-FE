import React from "react";
import { createTheme } from "@mui/material/styles";

const CustomTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: `var(--gold-color)`,
          fontFamily:"Roboto",
          fontWeight:"500"
        },
      },
    },
    // ReactDatePicker: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "lightblue", // Customize calendar colors here
    //     },
    //   },
    // },
  },
});

export default CustomTheme;
