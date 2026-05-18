import { render, screen } from "@testing-library/react";
import ProfileSocial from "..";

describe("ProfileSocial", () => {
  it("renders social links", () => {
    const data = [
      { name: "GitHub", url: "https://github.com/user" },
      { name: "LinkedIn", url: "https://linkedin.com/in/user" },
    ];
    render(<ProfileSocial data={data} />);
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(
      screen.getByRole("link", { name: "GitHub profile" }),
    ).toHaveAttribute("href", "https://github.com/user");
    expect(
      screen.getByRole("link", { name: "LinkedIn profile" }),
    ).toHaveAttribute("href", "https://linkedin.com/in/user");
  });

  it("handles empty data", () => {
    render(<ProfileSocial data={[]} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
