export type LinkListItem = {
  href: string;
  title: string;
  icon?: React.ReactNode;
};

export function LinkList(props: { items: LinkListItem[] }) {
  return (
    <ul className="flex list-none space-x-4 text-fg">
      {props.items.map((link) => (
        <li key={link.href} className="flex flex-1">
          <a
            href={link.href}
            className="flex items-center gap-1 hover:text-muted lowercase hover:text-underline-500 hover:underline"
          >
            {link.icon}
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
