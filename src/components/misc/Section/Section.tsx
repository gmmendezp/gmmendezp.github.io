import clsx from "clsx";

interface AboutType extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ children, className, ...props }: AboutType) => {
  return (
    <section
      className={clsx(
        className,
        "w-full sm:px-[10%] px-[5%] sm:py-14 py-9 flex flex-col sm:gap-7 gap-5 tracking-widest",
      )}
      {...props}
    >
      {children}
    </section>
  );
};
