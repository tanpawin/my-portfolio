import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
      <nav className="flex justify-between items-center mb-16">
        <h1 className="font-semibold text-xl tracking-tight">Portfolio.</h1>
        <div className="flex items-center gap-4">
          <button
            // แก้ไข: ใช้ resolvedTheme ในการตรวจสอบสถานะปัจจุบัน
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
          >
            {/* แก้ไข: ใช้ resolvedTheme สำหรับเปลี่ยนไอคอน */}
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="/Pawin Resume.pdf" // วางไฟล์ resume.pdf ไว้ในโฟลเดอร์ public
            download
            className="flex items-center gap-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      </nav>
  );
};
export default Navbar;
