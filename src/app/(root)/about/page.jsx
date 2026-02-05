import PageHeading from "@/components/ui/PageHeading";
import AboutMe from "@/components/pages/about/AboutMe";
import ToolBox from "@/components/pages/about/ToolBox";
import Process from "@/components/pages/about/Process";

export const metadata = {
  title: "About Me",
  description: `Learn about my journey as a designer and developer, what I'm currently focusing on, my technical stack and my process from idea to final product.`,
};

const AboutPage = () => {
  return (
    <section className=" container container-page container-xl">
      <header className="about__header flex-center">
        <PageHeading text={"About"} size="h1" />
      </header>
      <AboutMe />
      <div className="section-divider" />
      <ToolBox />
      <div className="section-divider" />
      <Process />
    </section>
  );
};

export default AboutPage;
