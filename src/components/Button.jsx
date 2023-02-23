const Button = ({ content, ...others }) => {
  return (
    <a {...others}>
      <button>{content}</button>
    </a>
  );
};
export default Button;
