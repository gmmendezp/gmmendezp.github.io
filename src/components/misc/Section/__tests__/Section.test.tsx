import { render, screen } from "@testing-library/react";
import Section from "..";
import SectionBody from "../SectionBody";
import SectionTitle from "../SectionTitle";

describe("Section", () => {
  it("renders children", () => {
    render(
      <Section>
        <p>content</p>
      </Section>,
    );
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("applies id prop", () => {
    render(
      <Section id="about">
        <p>content</p>
      </Section>,
    );
    expect(screen.getByText("content").closest("section")).toHaveAttribute(
      "id",
      "about",
    );
  });

  it("applies custom className", () => {
    const { container } = render(
      <Section className="custom">
        <p>content</p>
      </Section>,
    );
    expect(container.querySelector("section")).toHaveClass("custom");
  });
});

describe("SectionTitle", () => {
  it("renders text as h3", () => {
    render(<SectionTitle>My Title</SectionTitle>);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("My Title");
  });
});

describe("SectionBody", () => {
  it("renders children", () => {
    render(<SectionBody>body text</SectionBody>);
    expect(screen.getByText("body text")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <SectionBody className="custom">body</SectionBody>,
    );
    expect(container.firstChild).toHaveClass("custom");
  });
});
