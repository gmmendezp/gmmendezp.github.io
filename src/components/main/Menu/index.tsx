import clsx from "clsx";
import { Menu as MenuIcon } from "react-feather";
import type { SectionLink } from "../../../data/navigation";
import { useNavigationStore } from "../../../stores/navigationStore";
import Link from "../../misc/Link";

interface MenuProps {
  sections: ReadonlyArray<SectionLink>;
}

export const Menu = ({ sections }: MenuProps) => {
  const { activeSection, isMenuOpen, toggleMenu, closeMenu } =
    useNavigationStore();

  return (
    <section>
      <nav
        id="main-menu"
        aria-label="Main navigation"
        className={clsx(
          "max-w-7xl flex flex-wrap justify-end fixed z-30 w-full bg-menu mt-0 p-0 list-none max-md:top-12",
          isMenuOpen
            ? "max-md:translate-y-px ease-in-out duration-500 border-t-1 border-solid border-secondary"
            : "max-md:-translate-y-full ease-in-out duration-500",
        )}
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <Link
              className={clsx(
                "max-md:w-full p-4 lowercase hover:bg-menu-hover last:mr-12",
                isActive && "bg-menu-hover",
              )}
              key={section.name}
              href={section.href}
              aria-current={isActive ? "location" : undefined}
              onClick={closeMenu}
            >
              {section.name}
            </Link>
          );
        })}
      </nav>
      <div className="max-md:flex max-md:justify-end fixed z-30 w-full bg-menu hidden">
        <button
          type="button"
          aria-controls="main-menu"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="m-1.5 rounded border border-solid border-secondary p-2.5 font-bold lowercase"
          onClick={toggleMenu}
        >
          <MenuIcon
            className="text-secondary"
            aria-hidden="true"
            focusable="false"
          />
        </button>
      </div>
    </section>
  );
};

export default Menu;
