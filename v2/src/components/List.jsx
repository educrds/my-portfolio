const List = ({ content, href, ...others }) => (
  <a {...others} href={href}>
    <li>{content}</li>
  </a>
);

export default List;
