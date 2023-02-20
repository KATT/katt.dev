import Layout from '../components/Layout';
import LinkList from '../components/LinkList';
import Logo from '../components/Logo';

const IndexPage = () => (
  <Layout>
    <Logo />
    <LinkList
      items={[
        { href: 'https://github.com/KATT', title: 'GitHub' },
        { href: 'https://twitter.com/alexdotjs', title: 'Twitter' },
        {
          href: 'https://linkedin.com/in/johanssonalexander/',
          title: 'LinkedIn',
        },
        { href: 'mailto: alex@kattcorp.com', title: 'Email' },
      ]}
    />
  </Layout>
);

export default IndexPage;
