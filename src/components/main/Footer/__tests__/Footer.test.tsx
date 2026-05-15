import { render, screen } from "@testing-library/react";
import Footer from "..";

describe("Footer", () => {
  it("renders footer text", () => {
    render(<Footer text="Copyright 2024" />);
    expect(screen.getByText("Copyright 2024")).toBeInTheDocument();
  });
});
