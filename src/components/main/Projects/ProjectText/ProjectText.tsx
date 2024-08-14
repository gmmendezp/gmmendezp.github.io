import clsx from "clsx";

interface ProjectTextProps {
  className?: string;
  children: React.ReactNode;
}

export const ProjectText = ({ className, children }: ProjectTextProps) => (
  <p className={clsx("w-full m-0 p-0", className)}>{children}</p>
);
