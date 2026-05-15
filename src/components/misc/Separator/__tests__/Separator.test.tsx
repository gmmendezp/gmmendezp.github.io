import { render } from "@testing-library/react";
import Separator from "..";

describe("Separator", () => {
  it("renders an hr element", () => {
    const { container } = render(<Separator />);
    expect(container.querySelector("hr")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Separator className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
