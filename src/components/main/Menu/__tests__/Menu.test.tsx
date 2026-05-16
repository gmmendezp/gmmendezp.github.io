import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "..";

describe("Menu", () => {
  const sections = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
  ];

  it("renders all section links", () => {
    render(<Menu sections={sections} />);
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(screen.getByRole("link", { name: /portfolio/i })).toHaveAttribute(
      "href",
      "#portfolio",
    );
    expect(screen.getByRole("link", { name: /experience/i })).toHaveAttribute(
      "href",
      "#experience",
    );
  });

  it("renders menu toggle button", () => {
    render(<Menu sections={sections} />);
    expect(
      screen.getByRole("button", { name: /toggle navigation menu/i }),
    ).toBeInTheDocument();
  });

  it("starts with nav hidden on mobile", () => {
    const { container } = render(<Menu sections={sections} />);
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("max-md:-translate-y-full");
    expect(nav).not.toHaveClass("max-md:translate-y-px");
  });

  it("toggles visibility on button click", async () => {
    const user = userEvent.setup();
    const { container } = render(<Menu sections={sections} />);
    const nav = container.querySelector("nav");
    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });

    await user.click(toggleButton);

    expect(nav).toHaveClass("max-md:translate-y-px");
    expect(nav).not.toHaveClass("max-md:-translate-y-full");
  });
});
