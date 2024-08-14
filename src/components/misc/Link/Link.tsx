import clsx from "clsx";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
}

export const Link = ({ className, children, ...props }: LinkProps) => (
  <a
    className={clsx(
      className,
      "text-secondary hover:text-tertiary no-underline",
    )}
    {...props}
  >
    {children}
  </a>
);
