import { render, screen } from "@testing-library/react";
import About from "..";

describe("About", () => {
  it("renders section title", () => {
    render(<About data={["paragraph1"]} />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "About",
    );
  });

  it("renders all paragraphs", () => {
    const data = ["first paragraph", "second paragraph", "third paragraph"];
    render(<About data={data} />);
    expect(screen.getByText("first paragraph")).toBeInTheDocument();
    expect(screen.getByText("second paragraph")).toBeInTheDocument();
    expect(screen.getByText("third paragraph")).toBeInTheDocument();
  });

  it("applies readable paragraph styles", () => {
    render(<About data={["text"]} />);
    expect(screen.getByText("text")).toHaveClass(
      "leading-7",
      "tracking-normal",
    );
  });
});
