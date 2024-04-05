export function LinkList(props: {
  items: {
    href: string;
    title: string;
  }[];
}) {
  return (
    <ul className="flex list-none space-x-4">
      {props.items.map((link) => (
        <li
          key={link.href}
          className="flex flex-1 lowercase text-underline-500 underline"
        >
          <a href={link.href}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
}
