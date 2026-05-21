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

const title = 'Michael Pereira | Full-Stack Software Developer in Toronto';
const description =
  'Michael Pereira is a Full-Stack Software Developer at IBM based in Toronto, Canada. Specializing in React, Angular, TypeScript, Node.js, Java, and AWS cloud architecture with 3+ years of professional experience.';
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
  'Java',
  'cloud development',
  'IBM developer',
  'portfolio',
  'software developer portfolio',
  'web development portfolio',
  'Toronto developer',
  'frontend developer',
  'backend developer',
  'full stack engineer',
];

export const metadata: Metadata = {
  metadataBase: new URL('https://mwpereira.ca'),
  title: {
    default: title,
    template: '%s | Michael Pereira',
  },
  description: description,
  keywords: keywords,
  authors: [{ name: 'Michael Pereira', url: 'https://mwpereira.ca' }],
  creator: 'Michael Pereira',
  publisher: 'Michael Pereira',
  alternates: {
    canonical: 'https://mwpereira.ca',
  },
  openGraph: {
    title: title,
    description: description,
    url: 'https://mwpereira.ca',
    siteName: 'Michael Pereira - Full-Stack Software Developer',
    images: [
      {
        url: 'https://mwpereira.ca/michael-pereira-website.png',
        width: 1200,
        height: 630,
        alt: 'Michael Pereira - Full-Stack Software Developer Portfolio',
        type: 'image/png',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@mwpereira',
    images: [
      {
        url: 'https://mwpereira.ca/michael-pereira-website.png',
        alt: 'Michael Pereira - Full-Stack Software Developer Portfolio',
      },
    ],
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
  other: {
    'google-site-verification': '',
  },
};

// JSON-LD structured data for rich search results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Michael Pereira',
  url: 'https://mwpereira.ca',
  image: 'https://mwpereira.ca/michael-pereira.jpg',
  jobTitle: 'Full-Stack Software Developer II',
  worksFor: {
    '@type': 'Organization',
    name: 'IBM',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'Ontario',
    addressCountry: 'CA',
  },
  sameAs: [
    'https://github.com/mwpereira',
    'https://www.linkedin.com/michael-pereira-07/',
  ],
  knowsAbout: [
    'React',
    'Angular',
    'TypeScript',
    'Node.js',
    'Java',
    'AWS',
    'Full-Stack Development',
    'Cloud Architecture',
    'CI/CD',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-[#fafafa] dark:bg-[#0d0d0d] relative">
            {/* Subtle ambient gradient orbs */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/[0.03] dark:bg-primary-500/[0.02] rounded-full blur-[120px]" />
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-400/[0.03] dark:bg-primary-400/[0.015] rounded-full blur-[100px]" />
            </div>
            <Navigation />
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
