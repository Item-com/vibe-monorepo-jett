import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🐙 PWNED: GitHub Personal Access Tokens',
  description: 'git commit -m "got em"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0d1117] text-gray-300 font-mono">{children}</body>
    </html>
  )
}
