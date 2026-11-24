export const sections = [
  { id: "about", name: "About", href: "#about" },
  { id: "experience", name: "Experience", href: "#experience" },
  { id: "portfolio", name: "Personal Projects", href: "#portfolio" },
  { id: "education", name: "Education", href: "#education" },
] as const;

export type SectionLink = (typeof sections)[number];
export type SectionId = SectionLink["id"];
