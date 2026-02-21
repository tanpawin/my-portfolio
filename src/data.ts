// src/data.ts
export const PORTFOLIO_DATA = {
    name: "ภวินท์ ฐิติพงศ์",
    role: "Web Developer / Frontend Developer",
    profileImage: "/profile.jpg",
    bio: "สวัสดีครับ แทนครับ ผมกำลังศึกษาอยู่สาขาวิทยาการคอมพิวเตอร์ปี4 \n มีความสนใจในด้าน Web Development และ Frontend ครับ",
    contact: {
        email: "tanpawinttp@gmail.com",
        github: "https://github.com/tanpawin",
        linkedin: "https://www.linkedin.com/in/pawin-thitipong-7ab3843b2", // อย่าลืมเอาลิงก์ LinkedIn มาใส่
    },
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue",
        "React",
        "Next.js",
        "PHP",
        "MySQL",
        "Apache",
        "Figma"
    ],

    // เพิ่มผลงานที่คุณภูมิใจเป็นพิเศษ (นอกเหนือจากที่ดึงจาก GitHub)
    featuredProjects: [
        {
            id: "manual-1",
            name: "Full-Stack Web Application",
            description: "โปรเจกต์พัฒนาเว็บแอปพลิเคชันด้วยระบบฐานข้อมูล ",
            techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
            html_url: "https://github.com/tanpawin/your-repo-name", // ใส่ลิงก์ Repo
            homepage: "", // ลิงก์เว็บจริง (ถ้ามี)
        },
    ]
}