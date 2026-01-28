"use client";
import React, { useState, useEffect } from "react";
import { createStarryNight, common } from "@wooorm/starry-night";
import { toHtml } from "hast-util-to-html";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ImageComponent = ({ value }) => {
  const isFullWidth = value.display !== "inline";

  return (
    <section className="slug__render-image-wrapper">
      <figure
        className={`slug__render-figure ${isFullWidth ? "full-width" : "small-width"}`}
      >
        <div className="slug__render-image-container">
          <Image
            src={urlFor(value).auto("format").url()}
            alt={value.alt || "Project detail"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            loading="lazy"
            className="slug__render-image"
          />
        </div>
        {value.caption && (
          <figcaption className="slug__render-caption">
            {value.caption}
          </figcaption>
        )}
      </figure>
    </section>
  );
};

const CodeComponent = ({ value }) => {
  const { language, code, filename } = value;
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    async function highlight() {
      const starryNight = await createStarryNight(common);
      const scope = starryNight.flagToScope(language || "text");
      const tree = starryNight.highlight(code, scope);

      setHighlightedCode(toHtml(tree));
    }
    highlight();
  }, [code, language]);

  return (
    <div className="slug__code-wrapper">
      {filename && (
        <div className="slug__code-filename">
          <p>{filename}</p>
        </div>
      )}
      <div className="slug__code-block">
        <pre tabIndex="0">
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode || code }}
          />
        </pre>
      </div>
    </div>
  );
};

const components = {
  types: {
    image: ImageComponent,
    code: CodeComponent,
  },
  block: {
    h2: ({ children }) => <h2 className="slug__render-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="slug__render-h3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="slug__render-blockquote">{children}</blockquote>
    ),
    normal: ({ children }) => (
      <p className="slug__render-paragraph">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel} className="slug__render-link">
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul role="list" className="slug__render-list-ul">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol role="list" className="slug__render-list-ol">
        {children}
      </ol>
    ),
  },
};

const ProjectBody = ({ content }) => {
  return (
    <article className="slug__body-content container container-xl">
      <PortableText value={content} components={components} />
    </article>
  );
};

export default ProjectBody;
