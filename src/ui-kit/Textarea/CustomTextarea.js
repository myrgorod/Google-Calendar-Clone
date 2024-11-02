import { styled } from "@mui/system";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export const CustomTextarea = styled(TextareaAutosize)(({ theme }) => ({
  border: "none",
  outline: "none",
  padding: "8px",
  width: "100%",
  boxSizing: "border-box",
  resize: "none",
  "&:focus": {
    border: "none",
    outline: "none",
  },
  "&:hover": {
    border: "none",
    outline: "none",
  },
}));
