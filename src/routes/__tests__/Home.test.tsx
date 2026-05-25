import { render, screen, within } from "@testing-library/react";
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

  it("renders all section headings", async () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 3, name: "About" }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { level: 3, name: "Portfolio" }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { level: 3, name: "Old Projects" }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { level: 3, name: "Experience" }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { level: 3, name: "Education" }),
    ).toBeInTheDocument();
  });

  it("renders menu navigation links", () => {
    render(<Home />);
    const navigation = screen.getByRole("navigation", {
      name: /main navigation/i,
    });

    expect(
      within(navigation)
        .getAllByRole("link")
        .map((link) => link.textContent),
    ).toEqual(["About", "Experience", "Portfolio", "Education"]);
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
    expect(
      screen.getByText(/front-end focused web developer/i),
    ).toBeInTheDocument();
  });

  it("renders experience items from store", async () => {
    render(<Home />);
    expect(await screen.findByText("Gorilla Logic")).toBeInTheDocument();
    expect(await screen.findByText("Web Engineer")).toBeInTheDocument();
    expect(
      await screen.findByText("Edify Software Consulting"),
    ).toBeInTheDocument();
  });

  it("renders education items from store", async () => {
    render(<Home />);
    expect(
      await screen.findByText("Universidad Nacional de Costa Rica"),
    ).toBeInTheDocument();
    expect(await screen.findByText("Computer Science")).toBeInTheDocument();
  });

  it("renders project items from store", async () => {
    render(<Home />);
    expect(await screen.findByText("Resume/Portfolio")).toBeInTheDocument();
    expect(await screen.findByText("Neighborhood Map")).toBeInTheDocument();
    expect(await screen.findByText("Dota 2 Sentry Bot")).toBeInTheDocument();
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
      screen.getByText(
        `© ${new Date().getFullYear()} Martín Méndez. All rights reserved`,
      ),
    ).toBeInTheDocument();
  });
});
