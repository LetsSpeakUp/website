import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

type Props = {};

function ProgressBar({}: Props) {
    const { scrollYProgress } = useScroll();
    const scaleX = (scrollYProgress);
  return (
    <div className="sticky top-0 z-50">
      {" "}
      <motion.div
        className="h-1 bg-gradient-to-r from-yellow-500 via-amber-600 to-yellow-500 will-change-transform z-50 max-w-full"
        style={{ scaleX }}
      />
    </div>
  );
}

export default ProgressBar;
