import clsx from "clsx";
import { PlusCircle } from "react-feather";

interface TimelineItemProps {
  children: React.ReactNode;
}

export const TimelineItem = ({ children }: TimelineItemProps) => (
  <li
    className={clsx(
      "relative list-none w-[6px] my-0 mx-auto pt-[50px] bg-menu text-secondary tracking-wider",
      "odd:[&>.item]:left-[45px] odd:[&>.arrow]:left-[30px]",
      "odd:[&>.arrow]:border-r-[16px] odd:[&>.arrow]:border-l-0",
      "odd:[&>.arrow]:border-r-menu odd:[&>.arrow]:border-l-transparent",
      "even:[&>.item]:left-[-440px] even:[&>.arrow]:right-[30px]",
      "even:[&>.arrow]:border-r-0 even:[&>.arrow]:border-l-[16px]",
      "even:[&>.arrow]:border-r-transparent even:[&>.arrow]:border-l-menu",
      "max-xl:even:[&>.item]:left-[-390px]",
      "max-lg:even:[&>.item]:left-[-290px]",
      "max-md:ml-0",
      "max-md:even:[&>.arrow]:left-[30px]",
      "max-md:even:[&>.arrow]:border-r-[16px] max-md:even:[&>.arrow]:border-l-0",
      "max-md:even:[&>.arrow]:border-r-menu max-md:even:[&>.arrow]:border-l-transparent",
      "max-md:even:[&>.item]:left-[45px]",
    )}
  >
    <span
      className={clsx(
        "plus-sign",
        "absolute bottom-[15px] left-[-10px]",
        "z-20 w-[27px] h-[27px] rounded-full bg-menu",
        "flex justify-center items-center",
      )}
    >
      <PlusCircle />
    </span>

    <span
      className={clsx(
        "arrow",
        "absolute bottom-[22px] h-0 w-0",
        "border-solid border-y-transparent border-y-8",
      )}
    />

    <div
      className={clsx(
        "item",
        "relative bottom-0 p-[15px] bg-menu rounded-lg",
        "w-[400px] max-xl:w-[350px] max-lg:w-[250px] max-md:w-[calc(70vw)]",
      )}
    >
      {children}
    </div>
  </li>
);

export default TimelineItem;
