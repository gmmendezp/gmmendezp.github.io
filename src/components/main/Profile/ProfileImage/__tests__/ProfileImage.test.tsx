import { render } from "@testing-library/react";
import ProfileImage from "..";

describe("ProfileImage", () => {
  it("renders an img element", () => {
    const { container } = render(<ProfileImage image="profile.jpg" />);
    expect(container.querySelector("img")).toBeInTheDocument();
  });

  it("passes image prop as src to img", () => {
    const { container } = render(<ProfileImage image="profile.jpg" />);
    expect(container.querySelector("img")).toHaveAttribute("src");
  });

  it("sets alt text to Profile image", () => {
    const { container } = render(<ProfileImage image="profile.jpg" />);
    expect(container.querySelector("img")).toHaveAttribute(
      "alt",
      "Profile image",
    );
  });
});
