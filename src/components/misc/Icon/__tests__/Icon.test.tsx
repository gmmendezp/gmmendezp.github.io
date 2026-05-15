import { render } from "@testing-library/react";
import Icon from "..";

describe("Icon", () => {
  it("renders an icon for a valid name", () => {
    const { container } = render(<Icon name="Anchor" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders empty div for an invalid icon name", () => {
    const { container } = render(<Icon name="NonExistentIcon" />);
    expect(container.querySelector("svg")).not.toBeInTheDocument();
    expect(container.querySelector("div")).toBeInTheDocument();
  });

  it("passes size prop to icon", () => {
    const { container } = render(<Icon name="Anchor" size={24} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "24");
  });

  it("passes additional icon props", () => {
    const { container } = render(
      <Icon name="Anchor" strokeWidth={4} size={32} />,
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("stroke-width", "4");
    expect(svg).toHaveAttribute("width", "32");
  });

  it("matches icon names case-sensitively", () => {
    const { container } = render(<Icon name="anchor" />);
    expect(container.querySelector("svg")).not.toBeInTheDocument();
    expect(container.querySelector("div")).toBeInTheDocument();
  });
});
