import clsx from "clsx";
import Button from "../../../misc/Button";
import Link from "../../../misc/Link";

interface ProjectButtonProps {
  url: string;
  className?: string;
  children: React.ReactNode;
}

export const ProjectButton = ({
  url,
  className,
  children,
}: ProjectButtonProps) =>
  url ? (
    <Link
      href={url}
      target="_blank"
      className={clsx("max-sm:w-full sm:ml-1", className)}
    >
      <Button className="w-[80px]">{children}</Button>
    </Link>
  ) : (
    ""
  );
