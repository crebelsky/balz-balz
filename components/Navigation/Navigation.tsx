import { useState } from "react";
import { motion } from "framer-motion";
import NavigationItem, { NavigationItemProps } from "./Item";

import { useOverlayContext } from "../Navigation/NavigationContext";
import MenuIcon from "../../public/icons/add.svg";

const menuItems: NavigationItemProps[] = [
  {
    label: "Öffnungszeiten",
    href: "#oeffnungszeiten",
    overlay: true,
  },
  {
    label: "Stullen & Co.",
    href: "http://balzundbalz.de/menuekarte.pdf",
  },
  {
    label: "Impressum",
    href: "#impressum",
    overlay: true,
  },
  {
    label: "Datenschutz",
    href: "#datenschutz",
    overlay: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/balzundbalz/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/BalzundBalz/",
  },
];

const iconVariants = {
  opened: {
    rotate: 135,
  },
  closed: {
    rotate: 0,
  },
};

const menuVariants = {
  opened: {
    transform: "translateY(0px)",
  },
  closed: {
    transform: "translateY(-120px)",
  },
};

export default function Navigation() {
  const [isOpen, toggleOpen] = useState(false);
  const { isOverlayOpen, setOverlayOpen } = useOverlayContext();
  return (
    <>
      <motion.nav
        className="main-navigation h-auto"
        initial={false}
        variants={menuVariants}
        transition={{ type: "tween", duration: 0.5 }}
        animate={isOpen ? "opened" : "closed"}
      >
        <ul className="flex flex-row justify-center items-center">
          {menuItems.map((item: NavigationItemProps, index: number) => (
            <NavigationItem
              key={index}
              href={item.href}
              overlay={item.overlay}
              label={item.label}
            />
          ))}
        </ul>
      </motion.nav>
      <motion.div
        variants={iconVariants}
        animate={isOpen ? "opened" : "closed"}
        onClick={() => {
          toggleOpen(!isOpen);
          isOverlayOpen && setOverlayOpen(!isOverlayOpen);
        }}
        className="z-50 cursor-pointer"
      >
        <MenuIcon />
      </motion.div>
    </>
  );
}
