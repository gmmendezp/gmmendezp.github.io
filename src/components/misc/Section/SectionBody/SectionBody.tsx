import clsx from "clsx";

interface SectionBodyProps {
  className?: string;
  children: React.ReactNode;
}

export const SectionBody = ({ className, children }: SectionBodyProps) => (
  <div className={clsx(className, "text-text leading-7")}>{children}</div>
);
