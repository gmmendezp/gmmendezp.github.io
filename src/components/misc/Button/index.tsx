import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ type, className, children }: ButtonProps) => (
  <button
    type={type || "button"}
    className={clsx(
      "mx-0 mb-0 mt-px block h-9 w-full px-3 py-1.5",
      "rounded border border-secondary bg-menu text-secondary",
      "text-xs font-bold hover:bg-menu-hover hover:text-tertiary hover:cursor-pointer",
      className,
    )}
  >
    {children}
  </button>
);

export default Button;
