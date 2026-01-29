import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Tag from "./Tag";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons/index";

const Card = ({ project }) => {
  const { slug, title, coverImage, techStack } = project;

  const projectImageUrl = coverImage
    ? urlFor(coverImage).auto("format").url()
    : null;

  return (
    <li role="list" className="card" tabIndex={0}>
      <article className="card__inner">
        <header className="card__header">
          <h3 className="card__header--title">{title}</h3>
        </header>

        <div className="card__meta-row">
          <div className="card__content--tag-list">
            {techStack.slice(0, 4).map((tag, i) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
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
              priority
              className="card__image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          )}
        </figure>
      </article>
    </li>
  );
};

export default Card;
