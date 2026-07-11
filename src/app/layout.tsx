// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Kanit, Geist } from 'next/font/google' 
import { Providers } from './providers'
import { cn } from "@/lib/utils";
import ClickSparkWrapper from '@/components/effects/ClickSparkWrapper';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="th" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${kanit.className} bg-[#FAFAFA] text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 transition-colors duration-300`}>
        <Providers>
          <ClickSparkWrapper>
          {children}
          </ClickSparkWrapper>
        </Providers>
      </body>
    </html>
  )
}