"use client";

import { useEffect, useRef } from "react";
import {motion, useInView, useAnimation } from "framer-motion";

export default function Reveal ({children, width = "fitcontent"}) {
    return(
        <div style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visibile: {opacity: 1, y: 0},
                }}

                initial="hidden"
                animate="visibile"

            >
                {children}
            </motion.div>
        </div>
    );
}
