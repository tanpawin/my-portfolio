// src/data.ts
export const PORTFOLIO_DATA = {
  name: "ภวินท์ ฐิติพงศ์",
  role: "Web Application Developer",
  profileImage: "/profile.jpg",
  bio: "สวัสดีครับ แทนครับ ผมกำลังศึกษาอยู่สาขาวิทยาการคอมพิวเตอร์ปี4 \n มีความสนใจในด้าน UX/UI Designer และ Frontend Developer ครับ",
  contact: {
    email: "pawin.thitipong@gmail.com",
    github: "https://github.com/tanpawin",
    linkedin: "https://www.linkedin.com/in/pawin-thitipong-7ab3843b2",
    phone: "093-938-7831",
  },
  education: [
    {
      school: "มหาวิทยาลัยราชภัฏพระนคร",
      abbr: "PNRU",
      major: "คณะวิทยาศาสตร์และเทคโนโลยี",
      degree: "สาขาวิทยาการคอมพิวเตอร์",
      period: "2023 - ปัจจุบัน",
      gpa: "3.52",
    },
  ],
  skillCategories: [
    {
      name: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
      ],
    },
    {
      name: "Backend & ORM",
      skills: ["Node.js", "Supabase", "Prisma", "PHP"],
    },
    {
      name: "Database",
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      name: "Tools & Design",
      skills: [
        "Clerk",
        "Figma",
        "GitHub",
        "VS Code",
        "XAMPP",
        "Vercel",
        "Mermaid",
        "Render",
      ],
    },
  ],

  // เพิ่มผลงานที่นี่
  /* featuredProjects: [
        {
            id: "manual-1",
            name: "Full-Stack Web Application (📌Dummy Test ไม่ใช่โปรเจกต์จริง)",
            description: "โปรเจกต์พัฒนาเว็บแอปพลิเคชันด้วยระบบฐานข้อมูล ",
            techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
            html_url: "https://github.com/tanpawin/your-repo-name", // ใส่ลิงก์ Repo
            homepage: "", // ลิงก์เว็บ (ถ้ามี)
        },
    ] */
};
