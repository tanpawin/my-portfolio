// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/data";
import { useTheme } from "next-themes";
import Navbar from "../components/sections/navbar";
import About from "../components/sections/about";
import Skill from "../components/sections/skill";
// นำเข้า Projects component และ ProjectType
import Projects, { ProjectType } from "../components/sections/projects";

export default function Portfolio() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [githubRepos, setGithubRepos] = useState<ProjectType[]>([]);
  const [mounted, setMounted] = useState(false); /* เป็น State ที่ใช้บอกว่า Component ถูก Mount แล้วหรือยัง เพื่อป้องกัน Hydration Error หรือรอให้ทำงานฝั่ง Client ก่อน */

  useEffect(() => {
    setMounted(true);
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/tanpawin/repos?sort=updated&per_page=6",
        );
        const data = await res.json();
        console.log(data);
        if (Array.isArray(data))
          /* เหตุผลที่ต้องตรวจเพราะบางครั้ง GitHub อาจส่ง "message":"API rate limit exceeded" ซึ่งไม่ใช่ Array */
          setGithubRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos", error);
      }
    };
    fetchRepos();
  }, []);

  // ใช้ type เป็น ProjectType ให้สอดคล้องกัน
  const allProjects: ProjectType[] = [
   /*  ...PORTFOLIO_DATA.featuredProjects, */
    ...githubRepos,
  ].slice(0, 6);

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Navbar />
      <About />
      <Skill />
      <Projects projects={allProjects} />
    </div>
  );
}
