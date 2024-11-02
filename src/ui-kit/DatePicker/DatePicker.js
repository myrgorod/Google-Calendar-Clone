import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import GlobalContext from "../../common/context/GlobalContext";

const theme = createTheme({
  components: {
    MuiDatePicker: {
      defaultProps: {
        views: ["day", "month", "year"],
        inputFormat: "ddd, D MMMM",
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#4caf50  !important",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#388e3c",
            },
          },
        },
      },
    },
    MuiPickersMonth: {
      styleOverrides: {
        root: {
          "& .Mui-selected": {
            backgroundColor: "#4caf50  !important",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#388e3c",
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "0.375rem",
            borderWidth: "0px",
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
            "& fieldset": {
              border: "none",
            },
          },
          "& .MuiInputBase-input": {
            padding: "0.75rem 0.75rem",
            paddingLeft: 0,
            fontSize: "1rem",
            fontWeight: 700,
            color: "#323749",
            outline: "none",
            "& :focus": {
              outline: "none",
            },
          },
        },
      },
    },
  },
});

const BaseDatePicker = () => {
  const { daySelected, setDaySelected } = useContext(GlobalContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <DatePicker
          className=" border-0 focus:outline-none border-b-2   "
          value={daySelected}
          onChange={(newValue) => setDaySelected(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default BaseDatePicker;
