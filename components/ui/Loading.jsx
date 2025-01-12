// File: components/ui/Loading.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-6xl font-bold text-accent"
      >
        B
      </motion.div>
    </div>
  );
};

export default Loading;
