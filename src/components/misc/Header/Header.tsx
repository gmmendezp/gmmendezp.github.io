import clsx from "clsx";

interface HeaderProps {
  className?: string;
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

const classNames = {
  h1: "sm:text-5xl text-4xl text-h1",
  h2: "sm:text-xl text-base text-h2",
  h3: "sm:text-2xl text-lg text-h3",
};

export const Header = ({
  className,
  tag: Tag,
  children,
  ...props
}: HeaderProps) => (
  <Tag className={clsx(classNames[Tag], className)} {...props}>
    {children}
  </Tag>
);
