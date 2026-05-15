import { render, screen } from "@testing-library/react";
import Projects from "..";
import Project from "../Project";

const mockProjects = [
  {
    image: "project1.png",
    title: "Project One",
    summary: "First project summary",
    demoURL: "https://demo1.com",
    codeURL: "https://code1.com",
  },
  {
    image: "project2.png",
    title: "Project Two",
    summary: "Second project summary",
    codeURL: "https://code2.com",
  },
];

describe("Projects", () => {
  it("renders section title", () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Portfolio",
    );
  });

  it("renders all project titles", () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByText("Project One")).toBeInTheDocument();
    expect(screen.getByText("Project Two")).toBeInTheDocument();
  });
});

describe("Project", () => {
  it("renders title and summary", () => {
    render(<Project project={mockProjects[0]} />);
    expect(screen.getByText("Project One")).toBeInTheDocument();
    expect(screen.getByText("First project summary")).toBeInTheDocument();
  });

  it("renders demo button when demoURL is provided", () => {
    render(<Project project={mockProjects[0]} />);
    expect(screen.getByRole("link", { name: /demo/i })).toHaveAttribute(
      "href",
      "https://demo1.com",
    );
  });

  it("does not render demo button when demoURL is missing", () => {
    render(<Project project={mockProjects[1]} />);
    expect(
      screen.queryByRole("link", { name: /demo/i }),
    ).not.toBeInTheDocument();
  });

  it("renders code button when codeURL is provided", () => {
    render(<Project project={mockProjects[0]} />);
    expect(screen.getByRole("link", { name: /code/i })).toHaveAttribute(
      "href",
      "https://code1.com",
    );
  });
});
