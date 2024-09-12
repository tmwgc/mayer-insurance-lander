import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import AppLayout from './appLayout';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mayer Insurance Agency | Leading Professional Insurance Consulting Agency in United States',
  description:
    'We are the best professional insurance consulting agency for all needs. We offer exclusive consultations and services that protect you, your beloved, and your belongings at all costs, to keep you protected and hassle-free.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
