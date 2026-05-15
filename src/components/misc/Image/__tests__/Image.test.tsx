import { render } from "@testing-library/react";
import Image from "..";

describe("Image", () => {
  it("renders an img element", () => {
    const { container } = render(<Image image="http://example.com/img.png" />);
    expect(container.querySelector("img")).toBeInTheDocument();
  });

  it("sets src for absolute URLs", () => {
    const { container } = render(<Image image="http://example.com/img.png" />);
    expect(container.querySelector("img")).toHaveAttribute(
      "src",
      "http://example.com/img.png",
    );
  });

  it("applies custom className", () => {
    const { container } = render(
      <Image image="http://example.com/img.png" className="custom" />,
    );
    expect(container.querySelector("img")).toHaveClass("custom");
  });

  it("sets alt text", () => {
    const { container } = render(
      <Image image="http://example.com/img.png" alt="description" />,
    );
    expect(container.querySelector("img")).toHaveAttribute(
      "alt",
      "description",
    );
  });

  it("resolves local asset paths using URL constructor", () => {
    const { container } = render(<Image image="profile.jpg" />);
    const img = container.querySelector("img");
    expect(img).toHaveAttribute("src");
    expect(img.getAttribute("src")).not.toBe("profile.jpg");
  });

  it("renders with empty image string", () => {
    const { container } = render(<Image image="" />);
    expect(container.querySelector("img")).toHaveAttribute("src", "");
  });

  it("passes additional img props to the element", () => {
    const { container } = render(
      <Image image="http://example.com/img.png" width={200} height={100} />,
    );
    expect(container.querySelector("img")).toHaveAttribute("width", "200");
    expect(container.querySelector("img")).toHaveAttribute("height", "100");
  });
});
