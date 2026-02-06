import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🔍 EXPOSED: Perplexity API Keys',
  description: 'Search for this L you just took',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-blue-400 font-mono">{children}</body>
    </html>
  )
}
