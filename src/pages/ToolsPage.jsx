import { useState } from "react";
import { motion } from "framer-motion";

export default function ToolsPage() {
  const skillsData = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 75 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Java", level: 70 },
        { name: "Spring", level: 65 },
      ],
    },
    {
      category: "Database & Cloud",
      items: [
        { name: "Supabase", level: 75 },
        { name: "MySQL", level: 70 },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Axios", level: 85 },
        { name: "shadcn/ui", level: 80 },
        { name: "Framer Motion", level: 80 },

        { name: "Thymeleaf", level: 60 },
      ],
    },
  ];
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="bg-slate-900  text-amber-50 pt-25">
      <div className="container mx-auto flex flex-col items-center min-h-screen ">
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-8"
            >
              Tecnologie
            </motion.h2>

            {/* Filtri per categoria */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {skillsData.map((categoryData) => (
                <button
                  key={categoryData.category}
                  onClick={() => setActiveCategory(categoryData.category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === categoryData.category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {categoryData.category}
                </button>
              ))}
            </div>

            {/* Lista delle skills animate */}
            <div className="space-y-6">
              {skillsData
                .find((category) => category.category === activeCategory)
                ?.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-2 rounded-full bg-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
