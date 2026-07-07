import { PORTFOLIO_DATA } from "@/data"
import { motion } from "framer-motion"

const Skill = () => {
  return (
    <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mb-20"
      >
        <h4 className="text-2xl font-semibold mb-6">Tech Stack</h4>
        <div className="flex flex-wrap gap-3">
          {PORTFOLIO_DATA.skills.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-800">
              {skill}
            </span>
          ))}
        </div>
      </motion.section>
  )
}
export default Skill