// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} bg-[#FAFAFA] text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}