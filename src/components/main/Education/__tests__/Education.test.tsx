import { render, screen } from "@testing-library/react";
import Education from "..";
import EducationItem from "../EducationItem";

const mockEducation = [
  {
    institution: "University",
    area: "Computer Science",
    studyType: "Bachelors",
    startDate: "2010-09",
    endDate: "2014-06",
  },
  {
    institution: "Online School",
    area: "Web Dev",
    studyType: "Certificate",
    startDate: "2015",
    endDate: "2015",
  },
];

describe("Education", () => {
  it("renders section title", () => {
    render(<Education education={mockEducation} />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Education",
    );
  });

  it("renders all education items", () => {
    render(<Education education={mockEducation} />);
    expect(screen.getByText("Computer Science")).toBeInTheDocument();
    expect(screen.getByText("Web Dev")).toBeInTheDocument();
    expect(screen.getByText("University")).toBeInTheDocument();
    expect(screen.getByText("Online School")).toBeInTheDocument();
  });
});

describe("EducationItem", () => {
  it("renders area, institution, dates, and studyType", () => {
    render(<EducationItem data={mockEducation[0]} />);
    expect(screen.getByText("Computer Science")).toBeInTheDocument();
    expect(screen.getByText("University")).toBeInTheDocument();
    expect(screen.getByText("Sep 2010 - Jun 2014")).toBeInTheDocument();
    expect(screen.getByText("Bachelors")).toBeInTheDocument();
  });
});
