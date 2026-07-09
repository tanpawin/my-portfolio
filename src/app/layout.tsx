// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
// 1. เปลี่ยนจาก Inter เป็น Kanit (หรือฟอนต์ไทยอื่นๆ ที่ชอบ)
import { Kanit } from 'next/font/google' 
import { Providers } from './providers'

// 2. ตั้งค่าฟอนต์ Kanit ให้รองรับทั้งภาษาไทย (thai) และอังกฤษ (latin)
const kanit = Kanit({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-kanit', // เอาไว้เผื่อเรียกใช้ใน Tailwind (ถ้าจำเป็น)
})

export const metadata: Metadata = {
  title: 'Pawin Portfolio',
  description: 'Developer Portfolio ,Web Developer, Frontend Developer, Backend Developer, Fullstack Developer, React Developer, Next.js Developer, JavaScript Developer, TypeScript Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      {/* 3. เปลี่ยนจาก inter.className เป็น kanit.className */}
      <body className={`${kanit.className} bg-[#FAFAFA] text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}