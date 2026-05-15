import { render, screen } from "@testing-library/react";
import ProjectText from "..";

describe("ProjectText", () => {
  it("renders children in a paragraph", () => {
    render(<ProjectText>text content</ProjectText>);
    expect(screen.getByText("text content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<ProjectText className="custom">text</ProjectText>);
    expect(screen.getByText("text")).toHaveClass("custom");
  });

  it("has base classes w-full m-0 p-0", () => {
    render(<ProjectText>text</ProjectText>);
    const el = screen.getByText("text");
    expect(el).toHaveClass("w-full");
    expect(el).toHaveClass("m-0");
    expect(el).toHaveClass("p-0");
  });
});
