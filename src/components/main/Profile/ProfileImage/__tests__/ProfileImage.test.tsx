import { render } from "@testing-library/react";
import ProfileImage from "..";

describe("ProfileImage", () => {
  it("renders an img element", () => {
    const { container } = render(
      <ProfileImage image="profile.webp" alt="Portrait of Test User" />,
    );
    expect(container.querySelector("img")).toBeInTheDocument();
  });

  it("passes image prop as src to img", () => {
    const { container } = render(
      <ProfileImage image="profile.webp" alt="Portrait of Test User" />,
    );
    expect(container.querySelector("img")).toHaveAttribute("src");
  });

  it("sets alt text from props", () => {
    const { container } = render(
      <ProfileImage image="profile.webp" alt="Portrait of Test User" />,
    );
    expect(container.querySelector("img")).toHaveAttribute(
      "alt",
      "Portrait of Test User",
    );
  });

  it("sets intrinsic image dimensions", () => {
    const { container } = render(
      <ProfileImage image="profile.webp" alt="Portrait of Test User" />,
    );
    expect(container.querySelector("img")).toHaveAttribute("width", "840");
    expect(container.querySelector("img")).toHaveAttribute("height", "630");
  });
});
