import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '⚠️ LEAKED: OpenAI API Keys',
  description: 'Exposed credentials found on public GitHub repo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-green-400 font-mono">{children}</body>
    </html>
  )
}
