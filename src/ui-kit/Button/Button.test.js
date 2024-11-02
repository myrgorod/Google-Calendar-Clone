import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Button from "./Button";

describe("Button Component", () => {
  const props = {
    label: "Button",
    variant: "primary",
    size: "md",
    icon: "true",
  };
  test("render button", () => {
    render(<Button {...props} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("button includes icon", () => {
    render(<Button {...props} />);
    const button = screen.getByRole("button");
    const icon = within(button).getByRole("img");
    expect(icon).toBeInTheDocument();
  });

  test("renders with custom text", () => {
    render(<Button {...props} />);
    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", async () => {
    const props = {
      label: "Button",
      variant: "primary",
      size: "md",
      icon: "true",
    };
    const onClickMock = jest.fn();
    render(<Button {...props} onClick={onClickMock} />);
    const buttonElement = screen.getByText(/button/i);
    await user.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
