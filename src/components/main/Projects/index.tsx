import Section from "../../misc/Section";
import SectionBody from "../../misc/Section/SectionBody";
import SectionTitle from "../../misc/Section/SectionTitle";
import Project, { type ProjectLayout, type ProjectType } from "./Project";

interface ProjectsProps {
  id?: string;
  layout?: ProjectLayout;
  title?: string;
  projects: Array<ProjectType>;
}

export const Projects = ({
  id = "portfolio",
  layout = "default",
  title = "Portfolio",
  projects,
}: ProjectsProps) => (
  <Section id={id} className="bg-main3">
    <SectionTitle>{title}</SectionTitle>
    <SectionBody className="flex flex-wrap justify-between gap-12">
      {projects?.map((project) => (
        <Project key={project.title} layout={layout} project={project} />
      ))}
    </SectionBody>
  </Section>
);

export default Projects;
