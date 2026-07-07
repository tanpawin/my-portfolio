import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // ปรับเป็น Flexbox เพื่อแบ่งฝั่งซ้าย-ขวา
        className="mb-20 flex flex-col-reverse md:flex-row gap-10 items-center md:items-start justify-between"
      >
        {/* ฝั่งซ้าย: ข้อความแนะนำตัว */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {PORTFOLIO_DATA.name}
          </h2>
          <h3 className="text-xl text-zinc-500 dark:text-zinc-400 mb-6">
            {PORTFOLIO_DATA.role}
          </h3>
          <p className="text-lg leading-relaxed max-w-2xl text-zinc-700 dark:text-zinc-300 mb-8 mx-auto md:mx-0 whitespace-pre-line">
            {PORTFOLIO_DATA.bio}
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:scale-105 transition"
            >
              <Github size={20} />
            </a>
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:scale-105 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* ฝั่งขวา: รูปโปรไฟล์ */}
        <div className="shrink-0 relative w-40 h-40 md:w-48 md:h-48">
          <Image
            src={PORTFOLIO_DATA.profileImage}
            alt={PORTFOLIO_DATA.name}
            fill
            className="rounded-full object-cover shadow-lg border-4 border-white dark:border-zinc-800"
            priority // โหลดรูปนี้เป็นอันดับแรก
          />
        </div>
      </motion.section>
    </>
  );
};
export default About;
