import { render, screen } from "@testing-library/react";
import Experience from "..";
import ExperienceItem from "../ExperienceItem";

const mockExperience = [
  {
    position: "Developer",
    company: "Acme Inc",
    startDate: "2020-01",
    endDate: "2023-12",
    summary: "Built things",
  },
  {
    position: "Designer",
    company: "Beta Corp",
    startDate: "2018-06",
    endDate: "2019-12",
    summary: "Designed things",
  },
];

describe("Experience", () => {
  it("renders section title", () => {
    render(<Experience experience={mockExperience} />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Experience",
    );
  });

  it("renders all experience items", () => {
    render(<Experience experience={mockExperience} />);
    expect(screen.getByText("Developer")).toBeInTheDocument();
    expect(screen.getByText("Designer")).toBeInTheDocument();
    expect(screen.getByText("Acme Inc")).toBeInTheDocument();
    expect(screen.getByText("Beta Corp")).toBeInTheDocument();
  });
});

describe("ExperienceItem", () => {
  it("renders position, company, and dates", () => {
    render(<ExperienceItem data={mockExperience[0]} />);
    expect(screen.getByText("Developer")).toBeInTheDocument();
    expect(screen.getByText("Acme Inc")).toBeInTheDocument();
    expect(screen.getByText("2020-01 - 2023-12")).toBeInTheDocument();
  });

  it("renders summary", () => {
    render(<ExperienceItem data={mockExperience[0]} />);
    expect(screen.getByText("Built things")).toBeInTheDocument();
  });
});
