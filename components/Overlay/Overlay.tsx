import { useState } from "react";
import { motion } from "framer-motion";

export interface OverlayProps {}

const overlayVariants = {
  opened: {
    top: 0,
  },
  closed: {
    top: "-100vh",
  },
};

export default function Overlay(props: OverlayProps) {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      <motion.div
        className="h-screen w-screen bg-gray-900"
        initial={false}
        variants={overlayVariants}
        transition={{ type: "tween" }}
        animate={isOpen ? "opened" : "closed"}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nobis eos mollitia, ipsum suscipit voluptas accusantium, in
          repellendus, repudiandae ex eligendi repellat hic earum necessitatibus
          numquam maxime laboriosam odit laborum!
        </p>
      </motion.div>
    </>
  );
}
