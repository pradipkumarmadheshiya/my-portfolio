import React from "react";
import { motion } from "framer-motion";
import { style } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  const Wrapped = () => (
    <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
    className={`${style.padding} max-w-7xl mx-auto relative z-0`}>
      <span className="hash-span" id={idName}>&nbsp;</span>

      <Component />
    </motion.section>
  );

  return Wrapped;   //Return a component, not JSX directly
};

export default SectionWrapper;
