import { render } from "@testing-library/react";
import TimelineItem from "..";

describe("TimelineItem", () => {
  it("renders a list item", () => {
    const { container } = render(
      <TimelineItem>
        <div>content</div>
      </TimelineItem>,
    );
    expect(container.querySelector("li")).toBeInTheDocument();
  });

  it("renders children inside the item div", () => {
    const { container } = render(
      <TimelineItem>
        <div>content</div>
      </TimelineItem>,
    );
    expect(container.querySelector(".item")).toHaveTextContent("content");
  });

  it("renders the PlusCircle SVG icon", () => {
    const { container } = render(
      <TimelineItem>
        <div>content</div>
      </TimelineItem>,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders the arrow span", () => {
    const { container } = render(
      <TimelineItem>
        <div>content</div>
      </TimelineItem>,
    );
    expect(container.querySelector(".arrow")).toBeInTheDocument();
  });
});
