import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { sections } from "../../../../data/navigation";
import { useNavigationStore } from "../../../../stores/navigationStore";
import Menu from "..";

describe("Menu", () => {
  beforeEach(() => {
    useNavigationStore.setState({ activeSection: "about", isMenuOpen: false });
  });

  it("renders all section links", () => {
    render(<Menu sections={sections} />);
    expect(
      screen.getByRole("navigation", { name: /main navigation/i }),
    ).toBeInTheDocument();
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

  it("closes menu on link click", async () => {
    const user = userEvent.setup();
    const { container } = render(<Menu sections={sections} />);
    const nav = container.querySelector("nav");
    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });

    await user.click(toggleButton);
    await user.click(screen.getByRole("link", { name: /about/i }));

    expect(nav).toHaveClass("max-md:-translate-y-full");
    expect(nav).not.toHaveClass("max-md:translate-y-px");
  });

  it("marks the active section from the store", () => {
    useNavigationStore.setState({ activeSection: "portfolio" });
    render(<Menu sections={sections} />);

    expect(screen.getByRole("link", { name: /portfolio/i })).toHaveAttribute(
      "aria-current",
      "location",
    );
    expect(screen.getByRole("link", { name: /portfolio/i })).toHaveClass(
      "bg-menu-hover",
    );
    expect(screen.getByRole("link", { name: /about/i })).not.toHaveAttribute(
      "aria-current",
    );
  });
});
