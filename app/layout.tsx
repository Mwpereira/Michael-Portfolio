import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const title = 'Michael Pereira | Full-Stack Software Developer';
const description =
  'The personal portfolio of Michael Pereira, a full-stack software developer based in Toronto, Canada. Specializing in modern web technologies like React, Angular, and Node.js.';
const keywords = [
  'Michael Pereira',
  'mwpereira',
  'full-stack developer',
  'software engineer',
  'web developer',
  'Toronto',
  'Canada',
  'React',
  'Angular',
  'Node.js',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'Vue.js',
  'AWS',
  'cloud development',
  'portfolio',
  'tech',
  'developer',
  'programmer',
  'software developer portfolio',
  'web development portfolio',
  'Toronto developer',
];

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  authors: [{ name: 'Michael Pereira', url: 'https://mwpereira.ca' }],
  creator: 'Michael Pereira',
  publisher: 'Michael Pereira',
  openGraph: {
    title: title,
    description: description,
    url: 'https://mwpereira.ca',
    siteName: "Michael Pereira's Portfolio",
    images: [
      {
        url: 'https://mwpereira.ca/michael-pereira-website.png',
        width: 1200,
        height: 630,
        alt: 'Michael Pereira - Full-Stack Software Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@mwpereira',
    images: ['https://mwpereira.ca/michael-pereira-website.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
            <Navigation />
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
