import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "green",
          "&.Mui-checked": {
            color: "green",
          },
        },
      },
    },
  },
});

export default function CheckboxLabels() {
  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
      </FormGroup>
    </ThemeProvider>
  );
}
