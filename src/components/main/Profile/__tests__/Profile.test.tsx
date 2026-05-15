import { render, screen } from "@testing-library/react";
import Profile from "..";

describe("Profile", () => {
  const social = [
    { name: "GitHub", url: "https://github.com/user" },
    { name: "Linkedin", url: "https://linkedin.com/in/user" },
  ];
  const info = {
    firstName: "John",
    lastName: "Doe",
    label: "Developer",
    email: "john@example.com",
    image: "profile.jpg",
  };

  it("renders name and label", () => {
    render(<Profile social={social} info={info} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "John Doe",
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Developer",
    );
  });

  it("renders social links", () => {
    render(<Profile social={social} info={info} />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThanOrEqual(1);
    expect(
      links.some((l) => l.getAttribute("href") === "https://github.com/user"),
    ).toBe(true);
  });

  it("renders profile image", () => {
    const { container } = render(<Profile social={social} info={info} />);
    expect(container.querySelector("img")).toBeInTheDocument();
  });
});
