import { render, screen } from "@testing-library/react";
import Button from "..";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("defaults type to button", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("uses provided type", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
