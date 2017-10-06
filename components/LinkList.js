// @flow

type Link = {
  href: string,
  title: string
};

type Props = {
  items: Array<Link>
};

export default (props: Props) => (
  <ul>
    {props.items.map(link => (
      <li key={link.href}>
        <a href={link.href}>{link.title}</a>
      </li>
    ))}
    <style jsx>{`
      ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
      }
      li {
        flex: 1;
        margin: 0;
        padding: 0 5px;
        text-transform: lowercase;
      }
    `}</style>
  </ul>
);
