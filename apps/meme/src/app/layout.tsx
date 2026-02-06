import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🤖 AI MADE THIS - NO HANDS! 🙌",
  description: "A website built entirely by AI. Humans didn't touch a single key.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="comic-sans">{children}</body>
    </html>
  );
}
