import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const InfiniteScrollCarouselBack = () => {
  const technologies = [
    "Java",
    "Spring",
    "Node.JS",
    "Express",
    "Thymeleaf",
    "MySQL",
    "Supabase",
  ];

  const duplicatedTechs = [...technologies, ...technologies];

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="relative w-full overflow-hidden md:py-12 py-8 ">
      <motion.div
        className="flex"
        animate={{
          x: -position * 200,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 13,
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <motion.div
            key={`${tech}-${index}`}
            className="flex-shrink-0 w-30 h-30 md:w-48 md:h-48 mx-4 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <span className="md:text-2xl px-3 text-center text-x font-bold text-gray-800 dark:text-white">
              {tech}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollCarouselBack;
