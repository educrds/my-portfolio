const Title = ({ text, others }) => <h1 {...others}>{text}</h1>;
const SmallTitle = ({ content, others }) => <p {...others}>{content}</p>;

export { Title, SmallTitle };
