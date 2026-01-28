import { client } from "@/sanity/lib/client";
import { PROJECT_DATA_BY_SLUG } from "@/sanity/lib/queries";
import ProjectDetails from "@/components/pages/slug/ProjectDetails";
import ProjectBody from "@/components/pages/slug/ProjectBody";
import NextLink from "@/components/ui/NextLink";
import { ArrowLeft04Icon } from "@hugeicons/core-free-icons/index";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await client.fetch(PROJECT_DATA_BY_SLUG, { slug });
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.title,
    description: project.excerpt || `Read About Project: ${project.title} `,
    openGraph: {
      images: project.mainImage ? [project.mainImage.asset.url] : [],
    },
  };
}

const ProjectPage = async ({ params }) => {
  const { slug } = await params;
  const project = await client.fetch(PROJECT_DATA_BY_SLUG, { slug });
  const { body, ...details } = project;

  return (
    <section>
      <section className="container container-xl container-page">
        <header className="slug__header flex-center">
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
          <h1>{project.title}</h1>
        </header>
        <ProjectDetails details={details} />
      </section>
      {body && <ProjectBody content={body} />}
    </section>
  );
};

export default ProjectPage;
