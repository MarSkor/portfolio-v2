const Tag = ({ text, className }) => {
  return (
    <li role="listitem" className={`tag__wrapper ${className}`}>
      <p className="tag__text" style={{ color: "inherit" }}>
        {text}
      </p>
    </li>
  );
};

export default Tag;
