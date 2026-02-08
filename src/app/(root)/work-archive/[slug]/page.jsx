import { client } from "@/sanity/lib/client";
import { PROJECT_DATA_BY_SLUG } from "@/sanity/lib/queries";
import ProjectDetails from "@/components/pages/slug/ProjectDetails";
import ProjectBody from "@/components/pages/slug/ProjectBody";
import NextLink from "@/components/ui/NextLink";
import { ArrowLeft04Icon } from "@hugeicons/core-free-icons/index";
import Appearance from "@/components/animations/Appearance";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await client.fetch(PROJECT_DATA_BY_SLUG, { slug });

  const title = project?.title || "Project Not Found";
  const description =
    project?.excerpt || `Read about ${title} - Martine's Portfolio Project`;

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: title,
    description: description,
    openGraph: {
      title: `${project.title} | Martine's Portfolio`,
      description: project.excerpt,
      url: `https://martineskorbakk.com/work-archive/${slug}`,
      siteName: "Martine's Portfolio",
      images: [
        {
          url:
            project.coverImage?.asset?.url || "/assets/portfolio-home-page.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
    },
  };
}

const ProjectPage = async ({ params }) => {
  const { slug } = await params;

  const response = await sanityFetch({
    query: PROJECT_DATA_BY_SLUG,
    params: { slug },
    tags: [`project:${slug}`, "project"],
  });

  const project = response?.data;

  if (!project) {
    notFound();
  }

  const { body, ...details } = project;

  return (
    <section>
      <section className="container container-xl container-page">
        <header className="slug__header flex-center">
          <Appearance delay={0} y={10} resetScroll={true}>
            <nav className="breadcrumb-nav">
              <NextLink
                href="/work-archive"
                icon={ArrowLeft04Icon}
                iconPosition="left"
                iconSize={20}
                className="breadcrumb-link"
              >
                work-archive
              </NextLink>
            </nav>
          </Appearance>
          <Appearance delay={0.1}>
            {" "}
            <h1>{project.title}</h1>
          </Appearance>
        </header>
        <Appearance delay={0.2}>
          <ProjectDetails details={details} />
        </Appearance>
      </section>
      {body && (
        <Appearance delay={0.3}>
          <ProjectBody content={body} />
        </Appearance>
      )}
    </section>
  );
};

export default ProjectPage;
