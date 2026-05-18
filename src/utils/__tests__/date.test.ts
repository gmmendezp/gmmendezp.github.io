import { formatDate, formatDateRange } from "../date";

describe("formatDate", () => {
  it("keeps year-only dates unchanged", () => {
    expect(formatDate("2016")).toBe("2016");
  });

  it("formats year-month dates", () => {
    expect(formatDate("2020-01")).toBe("Jan 2020");
  });

  it("formats full dates as month and year", () => {
    expect(formatDate("2019-10-27")).toBe("Oct 2019");
  });

  it("keeps invalid dates unchanged", () => {
    expect(formatDate("bad-value")).toBe("bad-value");
    expect(formatDate("2020-13")).toBe("2020-13");
  });
});

describe("formatDateRange", () => {
  it("formats date ranges", () => {
    expect(formatDateRange("2020-01", "2023-12")).toBe("Jan 2020 - Dec 2023");
  });

  it("returns one value when both dates format to the same value", () => {
    expect(formatDateRange("2016", "2016")).toBe("2016");
  });

  it("uses Present when an end date is not provided", () => {
    expect(formatDateRange("2020-01")).toBe("Jan 2020 - Present");
  });
});
