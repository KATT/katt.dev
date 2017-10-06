export const JSONLD_KATTCORP = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "KATTCORP",
  legalName: "KATTCORP LTD.",
  url: "http://kattcorp.co.uk",
  foundingDate: "2016",
  founders: [
    {
      "@type": "Person",
      name: "Alexander Johansson"
    }
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "900 Linton Blvd Suite 104",
    addressRegion: "London",
    postalCode: "E8",
    addressCountry: "United Kingdom"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "alex@n1s.se",
    url: "https://twitter.com/alexheartjs"
  },
  sameAs: [
    "https://github.com/KATT",
    "https://github.com/KATTCORP",
    "https://www.linkedin.com/in/johanssonalexander/",
    "https://www.linkedin.com/company/19376256/",
    "https://twitter.com/alexheartjs"
  ]
};
