const Container = ({ children, className, others }) => {
  return (
    <div {...others} className={className}>
      {children}
    </div>
  );
};

export default Container;
