import Image from "next/image";
import { urlFor, urlForImage } from "@/sanity/lib/image";
import { ArrowUpRight02Icon } from "@hugeicons/core-free-icons/index";
import NextLink from "@/components/ui/NextLink";
import Tag from "@/components/ui/Tag";
import SanityImage from "@/components/ui/SanityImage";

const ProjectDetails = ({ details }) => {
  const {
    categoryName,
    role,
    techStack,
    githubUrl,
    liveUrl,
    coverImage,
    title,
    excerpt,
    collaboration,
  } = details;

  return (
    <section className="slug__content-wrapper">
      <section className="slug__image-wrapper">
        <figure className="slug__image-figure">
          <SanityImage
            fill
            priority
            quality={90}
            className="slug__image"
            alt={coverImage?.altText?.current || `Cover image for ${title}`}
            src={coverImage}
            blurDataURL={coverImage?.extData?.lqip}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </figure>
      </section>
      <section className="slug__details-wrapper">
        <section className="slug__details-summary">
          <h2 className="slug__details-summary--label">{excerpt}</h2>
        </section>
        <section className="slug__details-meta">
          <section className="slug__details-meta-grid">
            <section className="slug__details-meta-item">
              <h3 className="meta-label">Category</h3>
              <p className="meta-value capitalize">{categoryName}</p>
            </section>
            {role && (
              <section className="slug__details-meta-item">
                <h3 className="meta-label">Role</h3>
                <p className="meta-value capitalize">
                  {role}{" "}
                  {collaboration && (
                    <span className="meta-muted">({collaboration})</span>
                  )}
                </p>
              </section>
            )}
            {liveUrl && (
              <section className="slug__details-meta-item">
                <h3 className="meta-label">Live</h3>
                <NextLink
                  href={liveUrl.url}
                  icon={ArrowUpRight02Icon}
                  iconPosition="right"
                  iconSize={22}
                  className="meta-link animate-up-right capitalize"
                >
                  {liveUrl.label}
                </NextLink>
              </section>
            )}
            {githubUrl && (
              <section className="slug__details-meta-item">
                <h3 className="meta-label">Source</h3>
                <NextLink
                  href={githubUrl}
                  icon={ArrowUpRight02Icon}
                  iconPosition="right"
                  iconSize={22}
                  className="meta-link animate-up-right capitalize"
                >
                  View on GitHub
                </NextLink>
              </section>
            )}
          </section>
          {techStack && techStack.length > 0 && (
            <section className="slug__details-tech-stack slug__details-meta-item">
              <h3 className="meta-label">Tech Stack</h3>
              <ul className="tech-stack-list">
                {techStack.map((tech, index) => (
                  <Tag
                    className="tech-stack-item"
                    key={index}
                    text={typeof tech === "string" ? tech : tech.title}
                  />
                ))}
              </ul>
            </section>
          )}
        </section>
      </section>
    </section>
  );
};

export default ProjectDetails;
