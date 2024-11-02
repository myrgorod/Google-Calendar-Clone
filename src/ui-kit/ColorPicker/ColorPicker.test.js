import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ColorPickerContainer from "./ColorPickerContainer";
import ColorPicker from "./ColorPicker";

describe("ColorPickerContainer component", () => {
  test("renders without crashing", () => {
    render(<ColorPickerContainer />);
    const element = screen.getByText("Color");
    expect(element).toBeInTheDocument();
  });

  test("renders the correct number of ColorPicker components", () => {
    render(<ColorPickerContainer />);
    const colorPickers = screen.getAllByRole("img");
    expect(colorPickers).toHaveLength(12); // 6 colors in each panel, 2 panels
  });

  test("passes the correct color prop to each ColorPicker", () => {
    const colors = [
      "#9F2957",
      "#d90056",
      "#e25d33",
      "#dfc45a",
      "#b8c42f",
      "#16af6e",
      "#424988",
      "#397e49",
      "#439bdf",
      "#4254af",
      "#6c7ac4",
      "#8332a4",
    ];
    render(<ColorPickerContainer />);
    const colorPickers = screen.queryAllByRole("div.panelColor > div");

    colorPickers.forEach((colorPicker, index) => {
      expect(colorPicker).toHaveAttribute("color", colors[index]);
    });
  });
});

describe("ColorPicker element", () => {
  test("element renders without crashing", () => {
    render(<ColorPicker />);
    const element = screen.getByRole("img");
    expect(element).toBeInTheDocument();
  });

  test("renders the Icon component initially", () => {
    render(<ColorPicker color="#ff0000" />);
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle("color: #ff0000");
  });
});
