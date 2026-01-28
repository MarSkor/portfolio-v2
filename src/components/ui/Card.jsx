import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Tag from "./Tag";

const Card = ({ project }) => {
  const { slug, title, coverImage, techStack } = project;

  const projectImageUrl = coverImage
    ? urlFor(coverImage).auto("format").url()
    : null;

  return (
    <li role="list" className="card" tabIndex={0}>
      <article className="card__inner">
        <div className="card__content">
          <div className="card__content--heading">
            <h5 className="card__content--title">
              <Link
                href={`/work-archive/${slug.current}`}
                className="card__link card__view-more capitalize"
                prefetch={false}
              >
                {title}
              </Link>
            </h5>
          </div>
          <div className="card__content--tag-list">
            {techStack.slice(0, 5).map((tag, i) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
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
