import React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
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
          "& .MuiSvgIcon-root": {
            display: "none",
          },
          "& .MuiSelect-icon": {
            display: "none",
          },
          "& .MuiInputBase-input": {
            padding: "0.75rem 0.75rem",
            paddingLeft: 0,
            paddingTop: 0,
            fontSize: "1rem",
            fontWeight: 700,
            color: "#323749",
            outline: "none",
            "&:focus": {
              outline: "none",
            },
          },
        },
      },
    },
  },
});

const StyledMenu = styled("div")({
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "&::-webkit-scrollbar-thumb": {
    display: "none",
  },
});

const menuProps = {
  PaperProps: {
    style: {
      maxHeight: 300,
    },
    component: StyledMenu,
  },
};

// const timeOptions = [
//   "00:00",
//   "01:00",
//   "02:00",
//   "03:00",
//   "04:00",
//   "05:00",
//   "06:00",
//   "07:00",
//   "08:00",
//   "09:00",
//   "10:00",
//   "11:00",
//   "12:00",
//   "13:00",
//   "14:00",
//   "15:00",
//   "16:00",
//   "17:00",
//   "18:00",
//   "19:00",
//   "20:00",
//   "21:00",
//   "22:00",
//   "23:00",
// ];
// Створюємо timeOptions у форматі "hh:mm A"
const timeOptions = Array.from({ length: 24 }, (_, i) => {
  return dayjs().hour(i).minute(0).format("HH:mm ");
});

export default function CustomMultiInputTimeRangeField({
  startHour,
  setStartHour,
  endHour,
  setEndHour,
}) {
  const handleStartHourChange = (event) => {
    setStartHour(event.target.value);
    console.log("timeOptions", timeOptions);
  };

  const handleEndHourChange = (event) => {
    setEndHour(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Select
            value={startHour}
            onChange={handleStartHourChange}
            displayEmpty
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Start Time</em>;
              }
              return selected;
            }}
            inputProps={{ "aria-label": "Start Time" }}
            MenuProps={menuProps}
          >
            {timeOptions.map((time) => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
          <Select
            value={endHour}
            onChange={handleEndHourChange}
            displayEmpty
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>End Time</em>;
              }
              return selected;
            }}
            inputProps={{ "aria-label": "End Time" }}
            MenuProps={menuProps}
          >
            {timeOptions.map((time) => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
