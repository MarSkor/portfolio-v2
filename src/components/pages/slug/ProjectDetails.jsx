import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ArrowUpRight02Icon } from "@hugeicons/core-free-icons/index";
import NextLink from "@/components/ui/NextLink";
import Tag from "@/components/ui/Tag";

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

  const projectImageUrl = coverImage
    ? urlFor(coverImage).auto("format").url()
    : null;

  return (
    <section className="slug__content-wrapper">
      <section className="slug__image-wrapper">
        <figure className="slug__image-figure">
          {projectImageUrl && (
            <Image
              src={projectImageUrl}
              alt={`Cover image for ${title}`}
              fill
              priority
              className="slug__image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          )}
        </figure>
      </section>
      <section className="slug__details-wrapper">
        <section className="slug__details-summary">
          <h3 className="slug__details-summary--label">{excerpt}</h3>
        </section>
        <section className="slug__details-meta">
          <section className="slug__details-meta-grid">
            <section className="slug__details-meta-item">
              <h5 className="meta-label">Category</h5>
              <p className="meta-value capitalize">{categoryName}</p>
            </section>
            {role && (
              <section className="slug__details-meta-item">
                <h5 className="meta-label">Role</h5>
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
                <h5 className="meta-label">Live</h5>
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
                <h5 className="meta-label">Source</h5>
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
              <h5 className="meta-label">Tech Stack</h5>
              <ul role="list" className="tech-stack-list">
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
