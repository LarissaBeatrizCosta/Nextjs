import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0d1117",
      paper: "#161b22",
    },
    text: {
      primary: "#e6edf3",
      secondary: "#8b949e",
    },
    primary: {
      main: "#3fb950",
    },
    divider: "#21262d",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#161b22",
          borderColor: "#21262d",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#161b22",
            color: "#e6edf3",
            "& fieldset": { borderColor: "#21262d" },
            "&:hover fieldset": { borderColor: "#3fb950" },
            "&.Mui-focused fieldset": { borderColor: "#3fb950" },
          },
          "& .MuiInputLabel-root": { color: "#8b949e" },
          "& .MuiInputLabel-root.Mui-focused": { color: "#3fb950" },
        },
      },
    },
  },
});