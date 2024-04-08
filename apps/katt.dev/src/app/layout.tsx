import { JsonLd } from "@/ui/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full min-h-screen flex flex-col`}>
        {children}

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "KATTCORP",
            url: "http://katt.dev",
            foundingDate: "2016-10-26",
            founders: [
              {
                "@type": "Person",
                name: "Alex Johansson",
                alternateName: "KATT",
              },
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "Sweden",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "alexander@n1s.se",
              url: "https://twitter.com/alexdotjs",
            },
            sameAs: [
              "https://github.com/KATT",
              "https://www.linkedin.com/in/johanssonalexander/",
              "https://www.linkedin.com/company/19376256/",
              "https://twitter.com/alexdotjs",
              "https://katt.dev",
              "https://kattcorp.com",
              "https://kattcorp.co.uk",
              "https://n1s.se",
            ],
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "katt.dev",
  description: "Alex / KATT based in Sweden and the creator of tRPC",
  metadataBase: new URL("https://katt.dev"),
  alternates: {
    canonical: "/",
  },
};
