import { render, screen } from "@testing-library/react";
import { act } from "react";
import BackToTop from "..";

describe("BackToTop", () => {
  const setScrollY = (value: number) => {
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value,
    });
  };

  afterEach(() => {
    setScrollY(0);
  });

  it("renders a link to the top of the page", () => {
    setScrollY(301);
    render(<BackToTop />);

    expect(screen.getByRole("link", { name: /back to top/i })).toHaveAttribute(
      "href",
      "#top",
    );
  });

  it("starts hidden before the scroll threshold", () => {
    setScrollY(0);
    render(<BackToTop />);

    const link = screen.getByRole("link", {
      hidden: true,
    });
    expect(link).toHaveAttribute("aria-hidden", "true");
    expect(link).toHaveAttribute("tabindex", "-1");
    expect(link).toHaveClass("pointer-events-none", "scale-90", "opacity-0");
  });

  it("becomes visible after scrolling past the threshold", () => {
    setScrollY(0);
    render(<BackToTop />);

    act(() => {
      setScrollY(301);
      window.dispatchEvent(new Event("scroll"));
    });

    const link = screen.getByRole("link", { name: /back to top/i });
    expect(link).toHaveAttribute("aria-hidden", "false");
    expect(link).toHaveAttribute("tabindex", "0");
    expect(link).toHaveClass("scale-100", "opacity-100");
  });
});
