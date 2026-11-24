import { render, screen, within } from "@testing-library/react";
import Home from "../Home";

describe("Home", () => {
  it("renders profile info from store", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Martín Méndez",
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Senior Frontend Engineer",
    );
  });

  it("renders all section headings", async () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 3, name: "About" }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", {
        level: 3,
        name: "Personal Projects",
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { level: 3, name: "Old Projects" }),
    ).not.toBeInTheDocument();
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
    ).toEqual(["About", "Experience", "Personal Projects", "Education"]);
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(
      screen.getByRole("link", { name: /personal projects/i }),
    ).toHaveAttribute("href", "#portfolio");
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
      screen.getByText(
        /senior frontend engineer with extensive professional software development experience/i,
      ),
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
    expect(
      await screen.findByText("Information Systems Engineering"),
    ).toBeInTheDocument();
  });

  it("renders project items from store", async () => {
    render(<Home />);
    expect(
      await screen.findByText("Portfolio and Interactive Résumé"),
    ).toBeInTheDocument();
    expect(screen.queryByText("Neighborhood Map")).not.toBeInTheDocument();
    expect(screen.queryByText("Dota 2 Sentry Bot")).not.toBeInTheDocument();
  });

  it("renders social links from store", () => {
    const { container } = render(<Home />);
    const links = container.querySelectorAll("a");
    const githubLink = Array.from(links).find(
      (l) => l.getAttribute("href") === "https://github.com/gmmendezp",
    );
    const linkedinLink = Array.from(links).find(
      (l) => l.getAttribute("href") === "https://www.linkedin.com/in/gmmendezp",
    );
    const emailLink = Array.from(links).find(
      (l) => l.getAttribute("href") === "mailto:gmmendezp@gmail.com",
    );
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).not.toHaveAttribute("target");
  });

  it("renders résumé link", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "View Résumé" })).toHaveAttribute(
      "href",
      "/martin-mendez-resume.pdf",
    );
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
