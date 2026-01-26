import React from "react";

const PageHeading = ({ text, size = "h2", className = "" }) => {
  const Tag = size;

  return (
    <Tag className={`page-heading page-heading--${size} ${className}`}>
      {" "}
      <span className="page-heading__slash">/</span>
      {text}
    </Tag>
  );
};

export default PageHeading;
