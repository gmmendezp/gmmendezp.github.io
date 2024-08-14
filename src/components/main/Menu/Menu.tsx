import clsx from "clsx";
import { useState } from "react";
import { Menu as MenuIcon } from "react-feather";
import Link from "../../misc/Link";

interface MenuProps {
  sections: Array<{ name: string; href: string }>;
}

export const Menu = ({ sections }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <section>
      <nav
        className={clsx(
          "max-w-7xl flex flex-wrap justify-end fixed z-20 w-full bg-menu mt-0 p-0 list-none max-md:top-12",
          showMenu
            ? "max-md:translate-y-px ease-in-out duration-500 border-t-1 border-solid border-secondary"
            : "max-md:-translate-y-full ease-in-out duration-500",
        )}
      >
        {sections.map((section) => (
          <Link
            className="max-md:w-full p-4 lowercase hover:bg-menu-hover last:mr-12"
            key={section.name}
            href={section.href}
          >
            {section.name}
          </Link>
        ))}
      </nav>
      <div className="max-md:flex max-md:justify-end fixed z-30 w-full bg-menu hidden">
        <Link
          className="m-1.5 p-2.5 f-bold border-1 border-solid border-white rounded lowercase"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </Link>
      </div>
    </section>
  );
};
