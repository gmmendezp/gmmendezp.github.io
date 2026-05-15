import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home", () => {
  it("renders profile info from store", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Martín Méndez",
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Full stack developer",
    );
  });

  it("renders all section headings", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 3, name: "About" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Portfolio" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Experience" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Education" }),
    ).toBeInTheDocument();
  });

  it("renders menu navigation links", () => {
    render(<Home />);
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
    expect(screen.getByRole("link", { name: /education/i })).toHaveAttribute(
      "href",
      "#education",
    );
  });

  it("renders about text from store", () => {
    render(<Home />);
    expect(screen.getByText(/strong web developer/i)).toBeInTheDocument();
  });

  it("renders experience items from store", () => {
    render(<Home />);
    expect(screen.getByText("Gorilla Logic")).toBeInTheDocument();
    expect(screen.getByText("Web Engineer")).toBeInTheDocument();
    expect(screen.getByText("Edify Software Consulting")).toBeInTheDocument();
  });

  it("renders education items from store", () => {
    render(<Home />);
    expect(
      screen.getByText("Universidad Nacional de Costa Rica"),
    ).toBeInTheDocument();
    expect(screen.getByText("Computer Science")).toBeInTheDocument();
  });

  it("renders project items from store", () => {
    render(<Home />);
    expect(screen.getByText("Resume/Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Neighborhood Map")).toBeInTheDocument();
    expect(screen.getByText("Dota 2 Sentry Bot")).toBeInTheDocument();
  });

  it("renders social links from store", () => {
    const { container } = render(<Home />);
    const links = container.querySelectorAll("a");
    const githubLink = Array.from(links).find(
      (l) => l.getAttribute("href") === "https://github.com/gmmendezp",
    );
    const linkedinLink = Array.from(links).find(
      (l) =>
        l.getAttribute("href") ===
        "https://www.linkedin.com/in/martín-méndez-38aab22b",
    );
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it("renders footer from store", () => {
    render(<Home />);
    expect(
      screen.getByText("© 2024 Martin Mendez. All rights reserved"),
    ).toBeInTheDocument();
  });
});
