import clsx from "clsx";
import Image from "../../../misc/Image";
import ProjectButton from "../ProjectButton";
import ProjectText from "../ProjectText";

export type ProjectLayout = "default" | "compact";

export interface ProjectType {
  image: string;
  title: string;
  summary: string;
  demoURL?: string;
  codeURL: string;
}

interface ProjectProps {
  layout?: ProjectLayout;
  project: ProjectType;
}

export const Project = ({ layout = "default", project }: ProjectProps) => (
  <div
    className={clsx(
      "flex flex-wrap justify-end w-full align-start gap-2",
      layout === "compact" ? "md:w-[45%] lg:w-[29%]" : "md:w-[45%]",
    )}
  >
    <Image
      image={project.image}
      className="mb-4 mr-auto border-2 border-solid border-secondary rounded"
      alt={`${project.title} project screenshot`}
      width={712}
      height={400}
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

export default Project;
