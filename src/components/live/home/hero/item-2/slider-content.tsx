
import { BANNER_SLIDES } from "@/config/constants/banner-slides-data";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const transitionSettings = {
  duration: 0.5,
  ease: "easeOut",
};

const SliderContent = ({ currentIndex }: { currentIndex: number }) => {
  return (
    <>
      <motion.div
        className="subtitle"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ ...transitionSettings, delay: 1 }}
      >
        {BANNER_SLIDES[currentIndex].subtitle.toUpperCase()}
      </motion.div>
      <motion.div
        className="separator"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ ...transitionSettings, delay: 1.1 }}
      />
      <motion.div
        className="title"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ ...transitionSettings, delay: 1.2 }}
      >
        {BANNER_SLIDES[currentIndex].title}
      </motion.div>
      <motion.div
        className="text"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ ...transitionSettings, delay: 1.3 }}
      >
        {BANNER_SLIDES[currentIndex].text}
      </motion.div>
    </>
  );
};

export default SliderContent;
