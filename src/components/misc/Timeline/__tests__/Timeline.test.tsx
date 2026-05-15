import { render } from "@testing-library/react";
import Timeline from "..";

describe("Timeline", () => {
  it("renders children inside timeline items", () => {
    const { container } = render(
      <Timeline>
        <div>item1</div>
        <div>item2</div>
      </Timeline>,
    );
    expect(container.querySelector("ul")).toBeInTheDocument();
    expect(container.querySelectorAll("li")).toHaveLength(2);
  });

  it("renders no list items when empty", () => {
    const { container } = render(<Timeline>{[]}</Timeline>);
    expect(container.querySelectorAll("li")).toHaveLength(0);
  });
});
