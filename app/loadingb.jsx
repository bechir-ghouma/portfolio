// app/loading.js
"use client";
import { motion } from "framer-motion";

const LoadingB = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-primary">
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-8xl font-extrabold text-accent"
      >
        B
      </motion.div>
    </div>
  );
};

export default LoadingB;