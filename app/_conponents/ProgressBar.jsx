"use client";

import { motion, useScroll } from "framer-motion"

export default function ProgressBar() {
    const { scrollYProgress } = useScroll();

  return (
    <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" /> 
  )
}
