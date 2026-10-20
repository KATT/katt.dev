export type LinkListItem = {
  href: string;
  title: string;
  icon?: React.ReactNode;
};

export function LinkList(props: { items: LinkListItem[] }) {
  return (
    <ul className="flex list-none flex-col items-center space-y-2 text-fg sm:flex-row sm:items-stretch sm:space-x-4 sm:space-y-0">
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
