// @flow

import Layout from '../components/Layout';
import LinkList from '../components/LinkList';
import Logo from '../components/Logo';

export default () => (
  <Layout>
    <Logo />
    <LinkList
      items={[
        { href: 'https://github.com/KATT', title: 'github' },
        { href: 'https://twitter.com/alexheartjs', title: 'twitter' },
        {
          href: 'https://www.linkedin.com/in/johanssonalexander',
          title: 'linkedin',
        },
        { href: 'mailto: alexander@n1s.se', title: 'email' },
      ]}
    />
  </Layout>
);
