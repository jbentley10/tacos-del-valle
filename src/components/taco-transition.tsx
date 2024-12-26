"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TacoTransition = () => {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState((prevState) => (prevState + 1) % 4);
  };

  const tacoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="cursor-pointer"
        onClick={handleClick}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={tacoVariants}
        transition={{ duration: 0.5 }}
        key={state}
      >
        {state === 0 && (
          <svg width="200" height="200" viewBox="0 0 200 200">
            <path
              d="M20,100 Q100,20 180,100 Q100,180 20,100 Z"
              fill="#F2D16D"
              stroke="#8B4513"
              strokeWidth="4"
            />
            <circle cx="70" cy="90" r="10" fill="#FF6347" />
            <circle cx="100" cy="80" r="10" fill="#228B22" />
            <circle cx="130" cy="90" r="10" fill="#FF6347" />
          </svg>
        )}
        {state === 1 && (
          <svg width="200" height="200" viewBox="0 0 200 200">
            <path
              d="M20,100 Q100,20 180,100 Q100,180 20,100 Z"
              fill="#F2D16D"
              stroke="#8B4513"
              strokeWidth="4"
            />
            <path
              d="M20,100 Q60,60 100,100"
              fill="none"
              stroke="#8B4513"
              strokeWidth="4"
            />
            <circle cx="100" cy="80" r="10" fill="#228B22" />
            <circle cx="130" cy="90" r="10" fill="#FF6347" />
          </svg>
        )}
        {state === 2 && (
          <svg width="200" height="200" viewBox="0 0 200 200">
            <path
              d="M20,100 Q100,20 180,100 Q100,180 20,100 Z"
              fill="#F2D16D"
              stroke="#8B4513"
              strokeWidth="4"
            />
            <path
              d="M20,100 Q100,40 180,100"
              fill="none"
              stroke="#8B4513"
              strokeWidth="4"
            />
            <circle cx="130" cy="90" r="10" fill="#FF6347" />
          </svg>
        )}
        {state === 3 && <div style={{height: 200, width: 200, padding: '50px 50px'}} className="text-8xl">😋</div>}
      </motion.div>
    </div>
  );
};

export default TacoTransition;
