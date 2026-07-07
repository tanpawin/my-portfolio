// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/data";
import { useTheme } from "next-themes";
import Navbar from "../../components/navbar";
import About from "../../components/about";
import Skill from "../../components/skill";
// นำเข้า Projects component และ ProjectType
import Projects, { ProjectType } from "../../components/projects"; 

export default function Portfolio() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  const [githubRepos, setGithubRepos] = useState<ProjectType[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/tanpawin/repos?sort=updated&per_page=6");
        const data = await res.json();
        if (Array.isArray(data)) setGithubRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos", error);
      }
    };
    fetchRepos();
  }, []);

  // ใช้ type เป็น ProjectType ให้สอดคล้องกัน
  const allProjects: ProjectType[] = [...PORTFOLIO_DATA.featuredProjects, ...githubRepos].slice(0, 6);

  if (!mounted) return null; 

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Navbar />
      <About/>
      <Skill/>
      <Projects projects={allProjects} />
    </div>
  );
}