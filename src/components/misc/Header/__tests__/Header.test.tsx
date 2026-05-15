import { render, screen } from "@testing-library/react";
import Header from "..";

describe("Header", () => {
  it("renders h1 when tag is h1", () => {
    render(<Header tag="h1">Title</Header>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Title");
  });

  it("renders h2 when tag is h2", () => {
    render(<Header tag="h2">Subtitle</Header>);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Subtitle");
  });

  it("renders h3 when tag is h3", () => {
    render(<Header tag="h3">Section</Header>);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("Section");
  });

  it("applies custom className", () => {
    render(
      <Header tag="h1" className="custom">
        Title
      </Header>,
    );
    expect(screen.getByRole("heading")).toHaveClass("custom");
  });
});
