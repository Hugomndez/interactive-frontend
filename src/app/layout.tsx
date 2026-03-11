import { spaceGrotesk } from '@/fonts';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Interactive details form',
  description: 'Frontend Mentor challenge',
  icons: {
    icon: [{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      dir='ltr'>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
