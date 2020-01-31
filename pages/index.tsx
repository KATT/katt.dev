import { NextFunctionComponent } from 'next';
import * as React from 'react';
import Layout from '../components/Layout';
import LinkList from '../components/LinkList';
import Logo from '../components/Logo';

const IndexPage: NextFunctionComponent = () => (
  <Layout>
    <Logo />
    <LinkList
      items={[
        { href: 'https://github.com/KATT', title: 'GitHub' },
        { href: 'https://twitter.com/alexdotjs', title: 'Twitter' },
        {
          href: 'https://www.linkedin.com/in/johanssonalexander',
          title: 'LinkedIn',
        },
        { href: 'mailto: alex@kattcorp.com', title: 'Email' },
      ]}
    />
  </Layout>
);

// Redirect to `kattcorp.com`
if (typeof window === 'undefined') {
  const blacklist = [
    'kattcorp.co.uk',
    'kattcorp.se',
    // test:
    'web-git-feature-docs.katt.now.sh',
  ];

  IndexPage.getInitialProps = ({ req, res }) => {
    if (blacklist.includes(req.headers.host)) {
      res.writeHead(301, {
        location: 'https://kattcorp.com',
      });
      res.end();
    }

    return {};
  };
}

export default IndexPage;
