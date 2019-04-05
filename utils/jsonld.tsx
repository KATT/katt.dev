export const JSONLD_KATTCORP = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'KATTCORP',
  legalName: 'KATTCORP LTD.',
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
    streetAddress: 'C/O Oliver Phillips Ltd, 133 Whitechapel High Street',
    addressRegion: 'London',
    postalCode: 'E1 7QA',
    addressCountry: 'United Kingdom',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'alex@kattcorp.com',
    url: 'https://twitter.com/alexheartjs',
  },
  sameAs: [
    'https://github.com/KATT',
    'https://github.com/KATTCORP',
    'https://www.linkedin.com/in/johanssonalexander/',
    'https://www.linkedin.com/company/19376256/',
    'https://twitter.com/alexheartjs',
    'https://beta.companieshouse.gov.uk/company/10447485',
  ],
};
