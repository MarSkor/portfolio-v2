const Tag = ({ text, className }) => {
  return (
    <li className={`tag__wrapper ${className || ""}`}>
      <p className="tag__text" style={{ color: "inherit" }}>
        {text}
      </p>
    </li>
  );
};

export default Tag;
