const Tag = ({ children, ...props }) => {
  return (
    <span className="tag__wrapper">
      <p className="tag__text">{props.text}</p>
    </span>
  );
};

export default Tag;
