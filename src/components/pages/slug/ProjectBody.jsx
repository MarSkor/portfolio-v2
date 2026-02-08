"use client";
import React, { useState, useEffect } from "react";
import { createStarryNight, common } from "@wooorm/starry-night";
import { toHtml } from "hast-util-to-html";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ImageComponent = ({ value }) => {
  // getting dimensions from sanity
  if (!value || !value.asset) {
    return null;
  }
  const imageAsset = value.asset?._ref || "";
  const dimensions = imageAsset.split("-")[2]?.split("x");
  const width = dimensions ? parseInt(dimensions[0]) : 16;
  const height = dimensions ? parseInt(dimensions[1]) : 9;
  const aspectRatio = width / height;
  const size = value.size || "full";

  const imgUrl = urlFor(value).auto("format").url();
  if (!imgUrl) return null;

  return (
    <section className={`slug__render-image-wrapper ${size}-size`}>
      <figure className="slug__render-figure">
        <div
          className="slug__render-image-container"
          style={{ aspectRatio: aspectRatio }}
        >
          <Image
            src={imgUrl}
            alt={value.alt || "Project detail"}
            fill
            sizes={
              size === "small"
                ? "(max-width: 768px) 100vw, 600px"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            }
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
  if (!value || !value.code) return null;
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
    h2Center: ({ children }) => (
      <h2 className="slug__render-h2 text-center">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="slug__render-h3">{children}</h3>,
    h3Center: ({ children }) => (
      <h3 className="slug__render-h3 text-center">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="slug__render-blockquote">{children}</blockquote>
    ),
    normal: ({ children }) => (
      <p className="slug__render-paragraph">{children}</p>
    ),
    center: ({ children }) => (
      <p className="slug__render-paragraph text-center">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const rel = !href.startsWith("/") ? "noreferrer noopener" : undefined;
      const target = !href.startsWith("/") ? "_blank" : undefined;

      return (
        <a href={href} rel={rel} target={target} className="slug__render-link">
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
  if (!content) return null;

  return (
    <article className="slug__body-content container container-xl">
      <PortableText value={content} components={components} />
    </article>
  );
};

export default ProjectBody;
