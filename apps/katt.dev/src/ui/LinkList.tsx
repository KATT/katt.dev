export type LinkListItem = {
  href: string;
  title: string;
  icon?: React.ReactNode;
};

export function LinkList(props: { items: LinkListItem[] }) {
  return (
    <ul className="flex flex-col sm:flex-row list-none sm:space-x-4 space-y-2 sm:space-y-0 text-fg">
      {props.items.map((link) => (
        <li key={link.href} className="sm:flex-1">
          <a
            href={link.href}
            className="flex items-center gap-2 hover:text-muted lowercase hover:text-underline-500 hover:underline"
          >
            {link.icon}
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
