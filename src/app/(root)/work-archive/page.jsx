import WorkArchiveOverview from "@/components/pages/work-archive/WorkArchiveOverview";
import PageHeading from "@/components/ui/PageHeading";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_PROJECTS, CATEGORIES_DATA } from "@/sanity/lib/queries";

export const metadata = {
  title: "Work Archive",
  description: "A showcase of my work and projects.",
};

const WorkArchivePage = async ({ searchParams }) => {
  const params = await searchParams;
  const category = params.category ?? "all";

  const [categories, projects] = await Promise.all([
    sanityFetch({
      query: CATEGORIES_DATA,
      params: {},
      tags: ["category"],
    }),
    sanityFetch({
      query: ALL_PROJECTS,
      params: { category },
      tags: ["project"],
    }),
  ]);

  return (
    <section className="container container-xl container-page">
      <header className="archive__header flex-center">
        <PageHeading text={"Work Archive"} size="h1" />
      </header>
      <WorkArchiveOverview
        categories={categories.data}
        projects={projects.data}
        activeCategory={category}
      />
    </section>
  );
};

export default WorkArchivePage;
