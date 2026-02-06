import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🚨 LEAKED: Anthropic Claude API Keys',
  description: 'Constitutional AI? More like Constitutionally LEAKED',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a2e] text-orange-400 font-mono">{children}</body>
    </html>
  )
}
