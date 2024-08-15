import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Mr Gaming',
    template: 'Mr Gaming | %s',
  },
  description:
    'Mr Gaming adalah platform terpercaya di Indonesia yang menyediakan layanan top-up game dan afiliasi voucher game termurah. Nikmati pengalaman bermain game tanpa batas dengan harga terbaik dan layanan profesional.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="16x16" />
        <link
          rel="apple-touch-icon"
          href="/icon.png"
          type="image/png"
          sizes="16x16"
        />
      </head>
      <body className="bg-[#f2f5f7] min-h-screen flex flex-col h-[800px]">
        <Header />
        <main className="mx-4  sm:mx-6  md:mx-8  lg:mx-10  xl:mx-12  flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
