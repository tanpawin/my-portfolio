// src/components/projects.tsx
"use client";

import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// ประกาศ Type สำหรับ Props ที่รับเข้ามา
export interface ProjectType {
  id: number | string;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  techStack?: string[];
  topics?: string[];
}

interface ProjectsProps {
  projects: ProjectType[];
}

const topicDisplay: Record<string, string> = {
  nextjs: "Next.js",
  typescript: "TypeScript",
  javascript: "JavaScript",
  react: "React",
  tailwindcss: "Tailwind CSS",
  nodejs: "Node.js",
  express: "Express.js",
  mysql: "MySQL",
  mongodb: "MongoDB",
  php: "PHP",
  html: "HTML",
  css: "CSS",
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h4 className="text-2xl font-semibold mb-6">My Projects</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((repo: ProjectType) => (
            <div
              key={repo.id}
              className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition duration-300 flex flex-col justify-between h-full bg-white dark:bg-zinc-800/50"
            >
              <div>
                <h5 className="font-semibold text-lg mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                  {repo.name}
                </h5>
                {repo.name === "my-portfolio" && (
                  <p className="mb-3 text-sm font-medium text-amber-600 dark:text-amber-400">
                    ⭐ กำลังชมโปรเจกต์นี้อยู่
                  </p>
                )}
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-3">
                  {repo.description || "GitHub ของPortfolioนี้ครับ"}
                </p>
                {(repo.techStack ?? repo.topics) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(repo.techStack ?? repo.topics)?.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-700/50 rounded-md"
                      >
                        {topicDisplay[tech] ?? tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-4 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 hover:underline"
                >
                  <Github size={14} /> Code
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
        ))}
      </div>
    </motion.section>
  );
}
