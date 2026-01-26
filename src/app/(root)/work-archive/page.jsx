import WorkArchiveOverview from "@/components/pages/work-archive/WorkArchiveOverview";
import PageHeading from "@/components/ui/PageHeading";
import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS, CATEGORIES_DATA } from "@/sanity/lib/queries";

export const revalidate = 60;

const WorkArchivePage = async ({ searchParams }) => {
  const params = await searchParams;
  const category = params.category ?? "all";

  const [categories, projects] = await Promise.all([
    client.fetch(CATEGORIES_DATA),
    client.fetch(ALL_PROJECTS, { category }),
  ]);

  console.log("categories", categories);

  return (
    <section className="container container-xl container-page">
      <header className="archive__header flex-center">
        <PageHeading text={"Work Archive"} />
      </header>
      <WorkArchiveOverview
        categories={categories}
        projects={projects}
        activeCategory={category}
      />
    </section>
  );
};

export default WorkArchivePage;
