import Section from "../../misc/Section";
import SectionBody from "../../misc/Section/SectionBody";
import SectionTitle from "../../misc/Section/SectionTitle";
import Project, { type ProjectType } from "./Project";

interface ProjectsProps {
  projects: Array<ProjectType>;
}

export const Projects = ({ projects }: ProjectsProps) => (
  <Section id="projects" className="bg-main3">
    <SectionTitle>Portfolio</SectionTitle>
    <SectionBody className="flex flex-wrap justify-between gap-12">
      {projects?.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </SectionBody>
  </Section>
);
