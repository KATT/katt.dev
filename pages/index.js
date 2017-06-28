// @flow

import Head from 'next/head';
import LinkList from '../components/LinkList';
import Logo from '../components/Logo';


export default () => (
  <div>
    <Head>
      <title>KATTCORP LTD.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Logo />
    <LinkList items={[
      { href: 'https://github.com/KATTCORP', title: 'github' },
      { href: 'https://twitter.com/alexheartjs', title: 'twitter' },
      { href: 'https://www.linkedin.com/in/johanssonalexander', title: 'linkedin' },
      { href: 'mailto: alexander@n1s.se', title: 'email' },
    ]}
    />
    <style jsx>{`
      div {
        text-align: center;
      }
    `}</style>
    <style global jsx>{`
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      body {
        background: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
);
