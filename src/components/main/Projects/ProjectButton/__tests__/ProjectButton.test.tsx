import { render, screen } from "@testing-library/react";
import ProjectButton from "..";

describe("ProjectButton", () => {
  it("renders a link with the correct href", () => {
    render(<ProjectButton url="https://example.com">Demo</ProjectButton>);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("renders children inside a button", () => {
    render(<ProjectButton url="https://example.com">Demo</ProjectButton>);
    expect(screen.getByRole("button", { name: /demo/i })).toBeInTheDocument();
  });

  it("applies custom className to the link", () => {
    render(
      <ProjectButton url="https://example.com" className="custom">
        Demo
      </ProjectButton>,
    );
    expect(screen.getByRole("link")).toHaveClass("custom");
  });

  it("renders empty string when url is empty", () => {
    const { container } = render(<ProjectButton url="">Demo</ProjectButton>);
    expect(container.querySelector("a")).not.toBeInTheDocument();
  });
});
