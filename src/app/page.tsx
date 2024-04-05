import { LinkList } from '@/components/LinkList';
import { Logo } from '@/components/Logo';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 space-y-4">
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
    </main>
  );
}
