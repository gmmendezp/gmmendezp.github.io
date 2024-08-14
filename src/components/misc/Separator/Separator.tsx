import clsx from "clsx";

interface SeparatorProps {
  className?: string;
}

export const Separator = ({ className }: SeparatorProps) => (
  <div className={clsx("w-100", className)}>
    <hr className="border-primary border-t-2" />
  </div>
);
export default Separator;
