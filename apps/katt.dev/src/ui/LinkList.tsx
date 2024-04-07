export function LinkList(props: {
  items: {
    href: string;
    title: string;
  }[];
}) {
  return (
    <ul className="flex list-none space-x-4 text-fg">
      {props.items.map((link) => (
        <li key={link.href} className="flex flex-1">
          <a
            href={link.href}
            className="hover:text-muted lowercase text-underline-500 underline"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
