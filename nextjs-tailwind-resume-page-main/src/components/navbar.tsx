import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NAV_MENU = [
  { name: "About me", href: "#hero" },
  { name: "Éducation", href: "#education-section" },
  { name: "Expériences", href: "#experience-section" },
  { name: "Compétences", href: "#skills-section" },
  { name: "Mes projets", href: "#projets" },
];

function NavItem({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-500 transition-colors"
        placeholder="" 
              onPointerEnterCapture={() => {}} 
               onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      blurred={false}
      shadow={false}
      color="white"
      className="sticky top-0 z-50 border-0"
      placeholder="" 
              onPointerEnterCapture={() => {}} 
               onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          color="blue-gray"
          className="text-lg font-bold"
          placeholder="" 
              onPointerEnterCapture={() => {}} 
               onPointerLeaveCapture={() => {}}
        >
          Mon Portfolio
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((nav) => (
            <NavItem key={nav.name} href={nav.href}>
              {nav.name}
            </NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder="" 
              onPointerEnterCapture={() => {}} 
               onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open} className="lg:hidden">
        <ul className="flex flex-col items-start gap-4 p-4">
          {NAV_MENU.map((nav) => (
            <NavItem key={nav.name} href={nav.href}>
              {nav.name}
            </NavItem>
          ))}
        </ul>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
