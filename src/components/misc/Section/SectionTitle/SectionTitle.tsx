import clsx from "clsx";
import Header from "../../Header";

interface SectionTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const SectionTitle = ({ className, children }: SectionTitleProps) => {
  return (
    <Header
      tag="h3"
      className={clsx(className, "uppercase font-extrabold tracking-wider")}
    >
      {children}
    </Header>
  );
};
