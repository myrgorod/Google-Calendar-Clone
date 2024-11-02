import React, { useRef } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Toast from "./Toast";
import ToastWindow from "./ToastWindow";

describe("Toast Component", () => {
  test("toast appears when button is clicked", async () => {
    const msg = "Test Message";
    const timeout = 3000;

    render(<Toast msg={msg} timeout={timeout} />);

    const button = screen.getByText("Show toast");
    await user.click(button);

    expect(screen.getByText("Test Message")).toBeInTheDocument();
    expect(screen.getByLabelText("button")).toHaveClass("show");
  });

  test("toast disappears after the specified timeout", async () => {
    const msg = "Test Message";
    const timeout = 3000;

    render(<Toast msg={msg} timeout={timeout} />);

    const button = screen.getByText("Show toast");
    await user.click(button);

    expect(screen.getByText("Test Message")).toBeInTheDocument();
    expect(screen.getByLabelText("button")).toHaveClass("show");

    await waitFor(
      () => {
        // expect(button).toBeInTheDocument()
        expect(screen.queryByTestId(/toast/i)).not.toBeInTheDocument();
      },
      { timeout: timeout + 500 }
    );
  });

  test("toast hides when clicked", async () => {
    const msg = "Test Message";
    const timeout = 3000;

    render(<Toast msg={msg} timeout={timeout} />);

    const button = screen.getByText("Show toast");
    await user.click(button);

    const toast = screen.getByText(/toast/i);
    await user.click(toast);

    expect(toast).not.toHaveClass("show");
    expect(screen.queryByTestId(/toast/i)).not.toBeInTheDocument();
  });
});

describe("ToastWindow Component", () => {
  test("toast appears when showToast is called with a message", async () => {
    const timeout = 3000;
    const ToastComponent = () => {
      const toastRef = useRef();
      return (
        <div>
          <button onClick={() => toastRef.current.showToast("Test Message")}>
            Show Toast
          </button>
          <ToastWindow ref={toastRef} timeout={timeout} />
        </div>
      );
    };

    render(<ToastComponent />);

    const button = screen.getByText("Show Toast");
    await user.click(button);

    expect(screen.getByText(/test message/i)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(screen.getByLabelText("button")).toHaveClass("show");
  });

  test("toast disappears after the specified timeout", async () => {
    const timeout = 3000;
    const ToastComponent = () => {
      const toastRef = useRef();
      return (
        <div>
          <button onClick={() => toastRef.current.showToast("Test Message")}>
            Show Toast
          </button>
          <ToastWindow ref={toastRef} timeout={timeout} />
        </div>
      );
    };

    render(<ToastComponent />);

    const button = screen.getByText("Show Toast");
    await user.click(button);
    expect(button).toBeInTheDocument();
    expect(screen.getByText("Test Message")).toBeInTheDocument();
    expect(screen.getByLabelText("button")).toHaveClass("show");

    await waitFor(
      () => {
        expect(screen.queryByTestId(/toast/i)).not.toBeInTheDocument();
      },
      { timeout: timeout + 500 }
    );
  });

  test("toast hides when clicked", async () => {
    const timeout = 3000;
    const ToastComponent = () => {
      const toastRef = useRef();
      return (
        <div>
          <button onClick={() => toastRef.current.showToast("Test Message")}>
            Show Toast
          </button>
          <ToastWindow ref={toastRef} timeout={timeout} />
        </div>
      );
    };

    render(<ToastComponent />);

    const button = screen.getByText("Show Toast");
    await user.click(button);

    const toast = screen.queryByLabelText("button");
    await user.click(toast);
    const message = screen.queryByTestId(/toast/i);

    expect(toast).not.toHaveClass("show");
    expect(message).not.toBeInTheDocument();
  });
});
