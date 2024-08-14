import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ type, className, children }: ButtonProps) => (
  <button
    type={type || "button"}
    className={clsx(
      "btn block w-full h-9 mt-px mx-0 mb-0 py-1.5 px-3",
      "bg-menu text-secondary border-t-1 border-t-ourset border-secondary rounded",
      "text-xs font-bold hover:bg-menu-hover hover:text-tertiary hover:cursor-pointer",
      className,
    )}
  >
    {children}
  </button>
);
