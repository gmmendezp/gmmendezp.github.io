import clsx from "clsx";
import { useEffect, useState } from "react";
import { ArrowUp } from "react-feather";

const visibleAfter = 300;

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > visibleAfter);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={clsx(
        "fixed right-4 bottom-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-menu text-secondary shadow-lg transition duration-200 hover:bg-menu-hover hover:text-tertiary",
        isVisible
          ? "scale-100 opacity-100"
          : "pointer-events-none scale-90 opacity-0",
      )}
    >
      <ArrowUp aria-hidden="true" focusable="false" />
    </a>
  );
};

export default BackToTop;
