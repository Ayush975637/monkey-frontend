// components/AddictiveButton.jsx
import { motion } from 'framer-motion';

export function AddictiveButton() {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.1,
        rotate: [0, 5, -5, 0],
      }}
      whileTap={{ 
        scale: 0.9,
        backgroundColor: "#FFD700" 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400,
        damping: 15 
      }}
      className="bg-amber-500 px-8 py-4 rounded-xl text-white font-bold"
    >
      🍌 GET BANANAS!
    </motion.button>
  );
}