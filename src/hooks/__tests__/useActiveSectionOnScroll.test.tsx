import { act, render } from "@testing-library/react";
import { sections } from "../../data/navigation";
import { useNavigationStore } from "../../stores/navigationStore";
import { useActiveSectionOnScroll } from "../useActiveSectionOnScroll";

const TestComponent = () => {
  useActiveSectionOnScroll();

  return (
    <>
      {sections.map((section) => (
        <section id={section.id} key={section.id} />
      ))}
    </>
  );
};

const setSectionTop = (id: string, top: number) => {
  const section = document.getElementById(id);

  if (!section) throw new Error(`Missing section ${id}`);

  section.getBoundingClientRect = vi.fn(
    () =>
      ({
        top,
      }) as DOMRect,
  );
};

describe("useActiveSectionOnScroll", () => {
  beforeEach(() => {
    useNavigationStore.setState({ activeSection: "about", isMenuOpen: false });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 800,
    });
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 0,
    });
    Object.defineProperty(document.documentElement, "scrollHeight", {
      configurable: true,
      value: 2000,
    });
  });

  it("sets the active section from the current scroll position", () => {
    render(<TestComponent />);

    setSectionTop("about", -500);
    setSectionTop("experience", 80);
    setSectionTop("portfolio", 300);
    setSectionTop("education", 600);

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(useNavigationStore.getState().activeSection).toBe("experience");
  });

  it("uses the last section above the active offset", () => {
    render(<TestComponent />);

    setSectionTop("about", -800);
    setSectionTop("experience", -100);
    setSectionTop("portfolio", 100);
    setSectionTop("education", 500);

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(useNavigationStore.getState().activeSection).toBe("portfolio");
  });

  it("sets the last section active near the bottom of the page", () => {
    render(<TestComponent />);

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 1200,
    });

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(useNavigationStore.getState().activeSection).toBe("education");
  });
});
