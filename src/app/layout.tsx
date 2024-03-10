import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import ClientOnly from '@/components/ClientOnly';
import './globals.css';
import Navbar from '@/components/navbar/NavBar';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone By Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
      </body>
    </html>
  );
}
