import clsx from "clsx";
import { PlusCircle } from "react-feather";

interface TimelineItemProps {
  children: React.ReactNode;
}

export const TimelineItem = ({ children }: TimelineItemProps) => (
  <li
    className={clsx(
      "relative list-none w-[6px] my-0 mx-auto pt-[50px] bg-menu text-secondary tracking-wider",
      "[&>.item]:odd:left-[45px] [&>.arrow]:odd:left-[30px]",
      "[&>.arrow]:odd:border-r-[16px] [&>.arrow]:odd:border-l-0",
      "[&>.arrow]:odd:border-r-menu [&>.arrow]:odd:border-l-transparent",
      "[&>.item]:even:left-[-440px] [&>.arrow]:even:right-[30px]",
      "[&>.arrow]:even:border-r-0 [&>.arrow]:even:border-l-[16px]",
      "[&>.arrow]:even:border-r-transparent [&>.arrow]:even:border-l-menu",
      "max-xl:[&>.item]:even:left-[-390px]",
      "max-lg:[&>.item]:even:left-[-290px]",
      "max-md:ml-0",
      "max-md:[&>.arrow]:even:left-[30px]",
      "max-md:[&>.arrow]:even:border-r-[16px] max-md:[&>.arrow]:even:border-l-0",
      "max-md:[&>.arrow]:even:border-r-menu max-md:[&>.arrow]:even:border-l-transparent",
      "max-md:[&>.item]:even:left-[45px]",
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
        "absolute bottom-[22px] width-0 height-0",
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
