import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🌐 HACKED: Google Gemini API Keys',
  description: 'Google it: "why did I click this link"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-mono">{children}</body>
    </html>
  )
}
