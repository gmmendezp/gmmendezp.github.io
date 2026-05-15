import { render, screen } from "@testing-library/react";
import Link from "..";

describe("Link", () => {
  it("renders an anchor element", () => {
    render(<Link href="/test">Click</Link>);
    const link = screen.getByRole("link", { name: /click/i });
    expect(link).toHaveAttribute("href", "/test");
  });

  it("renders children", () => {
    render(<Link href="/">Link Text</Link>);
    expect(screen.getByRole("link")).toHaveTextContent("Link Text");
  });

  it("applies custom className", () => {
    render(
      <Link href="/" className="custom">
        Link
      </Link>,
    );
    expect(screen.getByRole("link")).toHaveClass("custom");
  });

  it("passes additional anchor props", () => {
    render(
      <Link href="/" target="_blank">
        Link
      </Link>,
    );
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });
});
