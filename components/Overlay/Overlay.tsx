import { motion } from "framer-motion";
import { useOverlayContext } from "../Navigation/NavigationContext";

export interface OverlayProps {
  copy: string;
}

const overlayItems: OverlayProps[] = [
  {
    copy: "Öffnungszeiten",
  },
  {
    copy: "Impressum",
  },
  {
    copy: "Datenschutz",
  },
];

const overlayVariants = {
  opened: {
    top: 0,
  },
  closed: {
    top: "-100vh",
  },
};

export default function Overlay() {
  const { isOverlayOpen, overlayContent } = useOverlayContext();

  const overlayCopy = overlayItems.filter(
    (item) => item.copy === overlayContent
  );

  return (
    <>
      <motion.div
        className="page-overlay absolute h-screen w-screen bg-gray-900 z-50"
        initial={false}
        variants={overlayVariants}
        transition={{ type: "tween" }}
        animate={isOverlayOpen ? "opened" : "closed"}
      >
        <p>{overlayCopy[0]?.copy}</p>
      </motion.div>
    </>
  );
}
