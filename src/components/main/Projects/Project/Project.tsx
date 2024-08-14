import Image from "../../../misc/Image";
import ProjectButton from "../ProjectButton";
import ProjectText from "../ProjectText";

export interface ProjectType {
  image: string;
  title: string;
  summary: string;
  demoURL?: string;
  codeURL: string;
}

interface ProjectProps {
  project: ProjectType;
}

export const Project = ({ project }: ProjectProps) => (
  <div className="flex flex-wrap justify-end md:w-[45%] w-full align-start gap-2">
    <Image
      image={project.image}
      className="mb-4 mr-auto border-2 border-solid border-secondary rounded h-[200px]"
      alt="project image"
    />
    <ProjectText className="font-bold text-xl">{project.title}</ProjectText>
    <ProjectText className="text-xs mt-1 mx-0 mb-2.5">
      {project.summary}
    </ProjectText>
    {project.demoURL && (
      <ProjectButton url={project.demoURL}>Demo</ProjectButton>
    )}
    {project.codeURL && (
      <ProjectButton url={project.codeURL}>Code</ProjectButton>
    )}
  </div>
);
