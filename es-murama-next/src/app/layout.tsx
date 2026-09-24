import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import AosInit from '@/components/AosInit';
import Loader from '@/components/Loader';
import ScrollTop from '@/components/ScrollTop';
import type { Metadata, Viewport } from 'next';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ecolesecondairemurama.netlify.app/'),
  title: 'Ecole Secondaire de Murama (ES Murama) | Rwanda',
  description:
    'Ecole Secondaire de Murama (ES Murama) in Rwanda. Explore academics, admissions, teachers, school life and contact information.',
  keywords: [
    'Ecole Secondaire de Murama',
    'ES Murama',
    'Murama Secondary School',
    'Murama school Rwanda',
    'schools in Murama',
    'schools in Ruhango',
    'secondary school Rwanda',
  ],
  authors: [{ name: 'Ecole Secondaire de Murama' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    title: 'Ecole Secondaire de Murama (ES Murama) | Rwanda',
    description:
      'Discover Ecole Secondaire de Murama (ES Murama), including academics, admissions, staff, school life and contact information.',
    url: 'https://ecolesecondairemurama.netlify.app/',
    siteName: 'Ecole Secondaire de Murama',
    locale: 'en_RW',
    images: [
      {
        url: 'https://ecolesecondairemurama.netlify.app/images/logo.png',
        alt: 'Ecole Secondaire de Murama school logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecole Secondaire de Murama (ES Murama) | Rwanda',
    description:
      'Official website of Ecole Secondaire de Murama (ES Murama) in Rwanda.',
    images: ['https://ecolesecondairemurama.netlify.app/images/logo.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#1234d4',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Ecole Secondaire de Murama',
  alternateName: 'ES Murama',
  url: 'https://ecolesecondairemurama.netlify.app/',
  logo: 'https://ecolesecondairemurama.netlify.app/images/logo.png',
  image: 'https://ecolesecondairemurama.netlify.app/images/school.png',
  description:
    'Ecole Secondaire de Murama (ES Murama) is a secondary school in Rwanda focused on academic learning, discipline and personal development.',
  email: 'esmurama10@yahoo.fr',
  telephone: '+250785723576',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Murama',
    addressCountry: 'RW',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-dmsans antialiased bg-white text-[#101a3a] selection:bg-[#1234d4] selection:text-white">
        <AosInit />
        <Loader />
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}
