import { render, screen } from "@testing-library/react";
import ProfileSocial from "..";

describe("ProfileSocial", () => {
  it("renders social links", () => {
    const data = [
      { name: "GitHub", url: "https://github.com/user" },
      { name: "Linkedin", url: "https://linkedin.com/in/user" },
    ];
    render(<ProfileSocial data={data} />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "https://github.com/user");
    expect(links[1]).toHaveAttribute("href", "https://linkedin.com/in/user");
  });

  it("handles empty data", () => {
    render(<ProfileSocial data={[]} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
