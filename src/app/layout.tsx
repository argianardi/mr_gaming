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
      <body className="bg-[#f2f5f7] min-h-screen flex flex-col">
        <Header />
        <main className="mb-6 w-[300px] exs:w-full overflow-x-hidden mx-auto flex-1 md:w-[750px] lg:w-[950px] xl:w-[1020px] 3xl:w-[1200px] 5xl:w-[1900px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
