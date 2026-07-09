// src/data.ts
export const PORTFOLIO_DATA = {
    name: "ภวินท์ ฐิติพงศ์",
    role: "Web Developer / Frontend Developer",
    profileImage: "/profile.jpg",
    bio: "สวัสดีครับ แทนครับ ผมกำลังศึกษาอยู่สาขาวิทยาการคอมพิวเตอร์ปี4 \n มีความสนใจในด้าน Web Development และ Frontend ครับ",
    contact: {
        email: "tanpawinttp@gmail.com",
        github: "https://github.com/tanpawin",
        linkedin: "https://www.linkedin.com/in/pawin-thitipong-7ab3843b2",
    },
    skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "MySQL",
        "Apache",
        "Figma"
    ],

    // เพิ่มผลงานที่นี่
    featuredProjects: [
        {
            id: "manual-1",
            name: "Full-Stack Web Application (📌Dummy Test ไม่ใช่โปรเจกต์จริง)",
            description: "โปรเจกต์พัฒนาเว็บแอปพลิเคชันด้วยระบบฐานข้อมูล ",
            techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
            html_url: "https://github.com/tanpawin/your-repo-name", // ใส่ลิงก์ Repo
            homepage: "", // ลิงก์เว็บ (ถ้ามี)
        },
    ]
}