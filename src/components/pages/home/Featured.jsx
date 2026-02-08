import Card from "@/components/ui/Card";
import { ArrowRight04Icon } from "@hugeicons/core-free-icons/index";
import NextLink from "@/components/ui/NextLink";

const Featured = ({ projects }) => {
  return (
    <section className="container container-xl">
      <div className="featured__wrapper">
        <header className="flex-center">
          <h2>Featured Projects</h2>
        </header>
        <section className="projects__wrapper">
          <ul role="list" className="projects__list">
            {projects.map((project, i) => (
              <Card key={project?._id} project={project} index={i} />
            ))}
          </ul>
        </section>
        <section className="flex-center">
          <NextLink href="/work-archive" icon={ArrowRight04Icon}>
            View Full Work Archive
          </NextLink>
        </section>
      </div>
    </section>
  );
};

export default Featured;
