import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Tag from "./Tag";

const Card = ({ project }) => {
  const { slug, title, coverImage, techStack } = project;

  const projectImageUrl = coverImage
    ? urlFor(coverImage)?.width(550).height(310).url()
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
        <div className="card__image-wrapper">
          {projectImageUrl && (
            <Image
              fill={true}
              src={projectImageUrl}
              alt={title}
              style={{
                objectFit: "cover",
              }}
            />
          )}
        </div>
      </article>
    </li>
  );
};

export default Card;
