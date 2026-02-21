// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/data";
import { useTheme } from "next-themes";
import { Moon, Sun, Github, Mail, Linkedin, ExternalLink, Download } from "lucide-react"; //แหล่งไอคอนจาก lucide-react
import { motion } from "framer-motion";
import Image from "next/image";

// Types สำหรับ GitHub API
interface Repo {
  id: number | string;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics?: string[];
}

export default function Portfolio() {
  // แก้ไข: ดึง resolvedTheme มาใช้แทน theme
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [githubRepos, setGithubRepos] = useState<Repo[]>([]);
  const [mounted, setMounted] = useState(false);

  // ดึงข้อมูลจาก GitHub API (ตั้งเป้าดึงแค่ 6 โปรเจกต์ล่าสุด)
  useEffect(() => {
    setMounted(true);
    const fetchRepos = async () => {
      try {
        // เปลี่ยน 'yourusername' เป็น GitHub Username ของคุณ
        const res = await fetch("https://api.github.com/users/tanpawin/repos?sort=updated&per_page=6");
        const data = await res.json();
        if (Array.isArray(data)) setGithubRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos", error);
      }
    };
    fetchRepos();
  }, []);

  // รวมผลงานที่พิมพ์เองกับผลงานจาก GitHub
  const allProjects = [...PORTFOLIO_DATA.featuredProjects, ...githubRepos].slice(0, 6);

  if (!mounted) return null; // ป้องกัน Hydration Mismatch สำหรับ next-themes

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">

      {/* Navbar & Theme Toggle */}
      <nav className="flex justify-between items-center mb-16">
        <h1 className="font-semibold text-xl tracking-tight">Portfolio.</h1>
        <div className="flex items-center gap-4">
          <button
            // แก้ไข: ใช้ resolvedTheme ในการตรวจสอบสถานะปัจจุบัน
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
          >
            {/* แก้ไข: ใช้ resolvedTheme สำหรับเปลี่ยนไอคอน */}
            {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="/resume.pdf" // วางไฟล์ resume.pdf ไว้ในโฟลเดอร์ public
            download
            className="flex items-center gap-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      </nav>

      {/* Hero / About Me */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // ปรับเป็น Flexbox เพื่อแบ่งฝั่งซ้าย-ขวา
        className="mb-20 flex flex-col-reverse md:flex-row gap-10 items-center md:items-start justify-between"
      >
        {/* ฝั่งซ้าย: ข้อความแนะนำตัว */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{PORTFOLIO_DATA.name}</h2>
          <h3 className="text-xl text-zinc-500 dark:text-zinc-400 mb-6">{PORTFOLIO_DATA.role}</h3>
          <p className="text-lg leading-relaxed max-w-2xl text-zinc-700 dark:text-zinc-300 mb-8 mx-auto md:mx-0 whitespace-pre-line">
            {PORTFOLIO_DATA.bio}
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a href={PORTFOLIO_DATA.contact.github} target="_blank" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:scale-105 transition"><Github size={20} /></a>
            <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:scale-105 transition"><Linkedin size={20} /></a>
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

      {/* Skills */}
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

      {/* Projects */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mb-20"
      >
        <h4 className="text-2xl font-semibold mb-6">Selected Projects</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((repo: any) => (
            <div
              key={repo.id}
              className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition duration-300 flex flex-col justify-between h-full bg-white dark:bg-zinc-800/50"
            >
              <div>
                <h5 className="font-semibold text-lg mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">{repo.name}</h5>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-3">
                  {repo.description || "ไม่มีคำอธิบายใน GitHub"}
                </p>
                {repo.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.techStack.map((tech: string) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-700/50 rounded-md">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-4 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <a href={repo.html_url} target="_blank" className="text-sm flex items-center gap-1 hover:underline"><Github size={14} /> Code</a>
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" className="text-sm flex items-center gap-1 hover:underline"><ExternalLink size={14} /> Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mb-10 bg-zinc-100 dark:bg-zinc-800/80 p-8 rounded-3xl"
      >
        <h4 className="text-2xl font-semibold mb-2">Let's Connect</h4>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">กำลังหาเด็กฝึกงานทำเว็บ ส่งข้อความหาผมได้เลยครับ ขอบคุณครับ🙏</p>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="ชื่อของคุณ" className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400" />
          <input type="email" placeholder="อีเมลของคุณ" className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400" />
          <textarea rows={4} placeholder="รายละเอียดที่ต้องการติดต่อ..." className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400"></textarea>
          <button className="bg-zinc-900 text-white dark:bg-amber-400 dark:text-zinc-900 font-medium py-3 rounded-lg hover:opacity-90 transition flex justify-center items-center gap-2">
            <Mail size={18} /> ส่งข้อความ
          </button>
        </form>
      </motion.section>

    </div>
  );
}