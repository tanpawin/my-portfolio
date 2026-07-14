import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const items = PORTFOLIO_DATA.education;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h4 className="text-2xl font-semibold mb-6">Education</h4>

      <div className="relative">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <motion.div
              key={`${item.abbr}-${item.period}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              {/* Timeline line & dot */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 border-2 border-amber-500 dark:border-amber-400">
                  <GraduationCap
                    size={18}
                    className="text-amber-600 dark:text-amber-400"
                  />
                </div>
                {!isLast && (
                  <div className="w-0.5 flex-1 mt-2 bg-zinc-200 dark:bg-zinc-700" />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 pt-1">
                <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-800/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition duration-300">
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1">
                    {item.period}
                  </p>
                  <h5 className="font-semibold text-lg mb-0.5">
                    {item.school}{" "}
                    <span className="text-zinc-500 dark:text-zinc-400 font-normal text-base">
                      ({item.abbr})
                    </span>
                  </h5>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                    {item.major}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                    {item.degree}
                  </p>
                  <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-700/50 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700">
                    GPA {item.gpa}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Education;
