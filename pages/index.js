// @flow

import Layout from "../components/Layout";
import LinkList from "../components/LinkList";
import Logo from "../components/Logo";

export default () => (
  <Layout>
    <Logo />
    <LinkList
      items={[
        { href: "https://github.com/KATT", title: "GitHub" },
        { href: "https://twitter.com/alexheartjs", title: "Twitter" },
        {
          href: "https://www.linkedin.com/in/johanssonalexander",
          title: "LinkedIn"
        },
        { href: "mailto: alex@n1s.se", title: "Email" }
      ]}
    />
  </Layout>
);
