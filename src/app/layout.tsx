import { JsonLD } from '@/components/JSONLD';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full min-h-screen flex flex-col`}>
        {children}

        <JsonLD
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'KATTCORP',
            legalName: 'KATTCORP AB',
            url: 'http://kattcorp.com',
            foundingDate: '2016-10-26',
            founders: [
              {
                '@type': 'Person',
                name: 'Alexander Johansson',
              },
            ],
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'Sweden',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: 'alex@kattcorp.com',
              url: 'https://twitter.com/alexdotjs',
            },
            sameAs: [
              'https://github.com/KATT',
              'https://www.linkedin.com/in/johanssonalexander/',
              'https://www.linkedin.com/company/19376256/',
              'https://twitter.com/alexdotjs',
              'https://katt.dev',
              'https://kattcorp.com',
              'https://kattcorp.co.uk',
            ],
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'KATTCORP',
  description:
    "KATTCORP is a software development company based in Sweden. We're a small team of developers who love to build things.",
  metadataBase: new URL('https://katt.dev'),
  alternates: {
    canonical: '/',
  },
};
