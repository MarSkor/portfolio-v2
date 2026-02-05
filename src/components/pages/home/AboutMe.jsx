import Appearance from "@/components/animations/Appearance";
import NextLink from "@/components/ui/NextLink";
import { ArrowRight04Icon } from "@hugeicons/core-free-icons/index";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="container container-page container-xl about-me-home">
      <header className="flex-center about-me-home__header">
        <h2>About Me</h2>
      </header>
      <section className="about-me__main-grid about-me-home__main-grid">
        <article className="about-me__intro-section about-me-home__intro-section">
          <Appearance delay={0.3}>
            <section className="intro-content">
              <p className="content-large-paragraph">
                I am a design minded front-end developer based in Norway,
                working at the intersection of technical logic and visual
                storytelling. I live for those 'aha' moments when pixels and
                code finally lock into place, creating interfaces that feel so
                intuitive they become invisible.
              </p>
              <p className="content-large-paragraph">
                I'm constantly learning, with a focus on making my code just as
                friendly and accessible as the UI itself.
              </p>
            </section>
          </Appearance>
        </article>

        <aside className="about-me__intro-visual">
          <Appearance delay={0.5}>
            <div className="illustration-frame">
              <figure className="illustration-figure">
                <Image
                  src="/assets/about/profile-picture.png"
                  alt="Profile Illustration"
                  width={300}
                  height={320}
                  style={{ objectFit: "cover" }}
                />
              </figure>
              <div className="frame-decoration"></div>
            </div>
          </Appearance>
        </aside>
      </section>
      <section className="flex-center">
        <NextLink
          href="/about"
          icon={ArrowRight04Icon}
          aria-label="Read more about my background and experience"
        >
          Read More About Me
        </NextLink>
      </section>
    </section>
  );
};

export default AboutMe;
