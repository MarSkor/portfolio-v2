import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Tag from "./Tag";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons/index";

const Card = ({ project, index }) => {
  const { slug, title, coverImage, techStack } = project;

  const projectImageUrl = coverImage
    ? urlFor(coverImage).width(1000).auto("format").url()
    : null;

  return (
    <li className="card">
      <article className="card__inner">
        <header className="card__header">
          <h2 className="card__header--title">{title}</h2>
        </header>

        <div className="card__meta-row">
          {techStack && techStack.length > 0 && (
            <ul className="card__content--tag-list">
              {techStack.slice(0, 5).map((tag, i) => (
                <Tag key={tag} text={tag} />
              ))}
            </ul>
          )}
          <footer className="card__footer">
            <Link
              href={`/work-archive/${slug.current}`}
              className="card__view-more"
            >
              <span className="card__view-text">View Project</span>
              <div className="card__arrow-circle">
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={20}
                  className="card__arrow"
                />
              </div>
            </Link>
          </footer>
        </div>

        <figure className="card__image-wrapper">
          {projectImageUrl && (
            <Image
              src={projectImageUrl}
              alt={`Cover image for ${title}`}
              fill
              priority={index < 2}
              className="card__image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </figure>
      </article>
    </li>
  );
};

export default Card;
