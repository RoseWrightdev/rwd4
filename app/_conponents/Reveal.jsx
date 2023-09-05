"use client";

import { useEffect, useRef } from "react";
import {motion, useInView, useAnimation, inView } from "framer-motion";

export default function Reveal ({children, width = "fit-content"}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (inView){
            mainControls.start("visibile");
            slideControls.start("visibile");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    return(
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visibile: {opacity: 1, y: 0},
                }}

                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 0.5, 
                    delay: 0.25
                }}
            >
                {children}
            </motion.div>
            <motion.div
            variants={{
                hidden: { left: 0},
                visibile: {left: "100%"},
            }}
            initial='hidden'
            animate={slideControls}
            transition={{duration: 0.5, ease: "easeIn"}}
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: "#3D2645",
                zIndex: 20,
            }}
            >
            </motion.div>
        </div>
    );
}
