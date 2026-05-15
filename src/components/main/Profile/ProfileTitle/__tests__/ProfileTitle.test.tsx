import { render, screen } from "@testing-library/react";
import ProfileTitle from "..";

describe("ProfileTitle", () => {
  it("renders first and last name", () => {
    render(
      <ProfileTitle
        data={{ firstName: "Jane", lastName: "Smith", label: "Designer" }}
      />,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Jane Smith",
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Designer",
    );
  });
});
