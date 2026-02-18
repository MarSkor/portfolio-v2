import Link from "next/link";
import Tag from "./Tag";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons/index";
import SanityImage from "./SanityImage";

const Card = ({ project, index }) => {
  const { slug, title, coverImage, techStack } = project;
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
          {coverImage?.asset && (
            <SanityImage
              fill
              priority={index < 2}
              quality={75}
              className="card__image"
              alt={coverImage?.altText?.current || `Cover image for ${title}`}
              src={coverImage}
              blurDataURL={coverImage?.extData?.lqip}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </figure>
      </article>
    </li>
  );
};

export default Card;
