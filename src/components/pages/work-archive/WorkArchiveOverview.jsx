"use client";
import Card from "@/components/ui/Card";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const WorkArchiveOverview = ({ categories, projects, activeCategory }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const allCategories = useMemo(
    () => [{ _id: "all", title: "All", slug: "all" }, ...categories],
    [categories],
  );

  const handleCategory = (slug) => {
    const params = new URLSearchParams(searchParams.toString());

    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }

    router.push(
      params.toString() ? `${pathname}?${params.toString()}` : pathname,
      { scroll: false },
    );
  };

  return (
    <section className="archive__projects-wrapper">
      <div className="archive__filters-wrapper">
        <span className="archive__filter-label" aria-hidden="true">
          Filter_by <span className="slash">/</span>
        </span>
        <ul className="archive__filter-list">
          {allCategories.map((category, i) => (
            <li key={category.slug}>
              <button
                className={`archive__filter-btn ${activeCategory === category.slug ? "archive__filter-btn--active" : ""}`}
                onClick={() => handleCategory(category.slug)}
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="archive__projects-wrapper">
        <ul className="projects__list">
          {projects.map((project, i) => (
            <Card key={project?._id} project={project} index={i} />
          ))}
        </ul>
      </div> */}
      <ul className="projects-grid-container">
        {projects.map((project, i) => (
          <Card key={project?._id} project={project} index={i} />
        ))}
      </ul>
    </section>
  );
};

export default WorkArchiveOverview;
