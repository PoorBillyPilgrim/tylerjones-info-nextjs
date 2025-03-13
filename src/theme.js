"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#f8f9fa",
        },
      },
      components: {
        MuiCssBaseline: {
          a: {
            "&:hover": {
              color: "#b33241",
            },
          },
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#343A40",
        },
      },
      components: {
        MuiCssBaseline: {
          a: {
            "&:hover": {
              color: "#ff8080",
            },
          },
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});
