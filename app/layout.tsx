import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Provider } from '@/context/Provider';
import { Box } from '@/utils/chakra';
import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import { ReactNode } from 'react';

const haken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['500'],
});
export const metadata: Metadata = {
  title: 'Start Network State',
  description: 'Build your own Digital City; powered by Solana.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={haken.className}>
        <Provider>
          <Header />
          <Box minH={'100vh'}>{children}</Box>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}