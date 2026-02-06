import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'US Customs Bonds | UNIS',
  description: 'Get your US customs bond online in less than 72 hours. Type 1, Type 2, Type 3, and FMC bonds available.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
