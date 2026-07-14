import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h4 className="text-2xl font-semibold mb-6">Tech Stack</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PORTFOLIO_DATA.skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-800/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition duration-300"
          >
            <h5 className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-3 uppercase tracking-wide">
              {category.name}
            </h5>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-700/50 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skill;
