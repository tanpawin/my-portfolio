import { PORTFOLIO_DATA } from "@/data"
import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"

const contact = () => {
    return (
        <>
                <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <h4 className="text-2xl font-semibold mb-6">Contact</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <p className="inline-flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:scale-105 transition text-sm text-zinc-500 dark:text-zinc-400">
                        <Mail size={20} className="shrink-0 text-amber-600 dark:text-amber-400" />
                        {PORTFOLIO_DATA.contact.email}
                    </p>
                    <p className="inline-flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:scale-105 transition text-sm text-zinc-500 dark:text-zinc-400">
                        <Phone size={20} className="shrink-0 text-amber-600 dark:text-amber-400" />
                        {PORTFOLIO_DATA.contact.phone}
                    </p>
                </div>
            </motion.section>
        </>
    )
}
export default contact