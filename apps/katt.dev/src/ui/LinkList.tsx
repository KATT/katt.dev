export type LinkListItem = {
  href: string;
  title: string;
  icon?: React.ReactNode;
};

export function LinkList(props: { items: LinkListItem[] }) {
  return (
    <ul className="flex flex-wrap justify-center list-none gap-x-5 gap-y-2 text-fg">
      {props.items.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="inline-flex items-center gap-1 hover:text-muted lowercase hover:underline"
          >
            {link.icon}
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
