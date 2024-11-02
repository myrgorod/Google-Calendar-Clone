import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  const options = ["Day", "Month"];

  test("renders the dropdown component", () => {
    render(<Dropdown options={options} />);
    expect(screen.getByText("Month")).toBeInTheDocument(); // assuming "Week" is the default value
  });

  test("opens the dropdown on click", async () => {
    render(<Dropdown options={options} />);
    const button = screen.getByRole("button");
    const month = screen.getByText(/month/i);
    await user.click(button);
    const day = screen.getByText(/day/i);
    expect(month).toBeInTheDocument();
    expect(day).toBeInTheDocument();
  });

  test("selects an option and closes the dropdown", async () => {
    render(<Dropdown options={options} />);
    const button = screen.getByText("Month");
    await user.click(button);
    const dayOption = screen.getByText("Day");
    await user.click(dayOption);
    expect(button).toHaveTextContent("Day");
    expect(screen.queryByText("Month")).not.toBeInTheDocument(); // ensure the dropdown closed
  });

  test("does not open the dropdown when disabled", async () => {
    render(<Dropdown options={options} isDisabled={true} />);
    const button = screen.getByText("Month");
    await user.click(button);
    expect(screen.queryByText("Day")).not.toBeInTheDocument();
  });
});
