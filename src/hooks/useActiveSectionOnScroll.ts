import { useEffect } from "react";
import { sections } from "../data/navigation";
import { useNavigationStore } from "../stores/navigationStore";

const activeOffset = 150;

export const useActiveSectionOnScroll = () => {
  const setActiveSection = useNavigationStore(
    (state) => state.setActiveSection,
  );

  useEffect(() => {
    const updateActiveSection = () => {
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;

      if (isNearBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      const activeSection = [...sections].reverse().find((section) => {
        const element = document.getElementById(section.id);

        return element
          ? element.getBoundingClientRect().top <= activeOffset
          : false;
      });

      if (activeSection) setActiveSection(activeSection.id);
    };

    updateActiveSection();
    const updateAfterLazySectionsMount = window.setTimeout(
      updateActiveSection,
      0,
    );
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.clearTimeout(updateAfterLazySectionsMount);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [setActiveSection]);
};
