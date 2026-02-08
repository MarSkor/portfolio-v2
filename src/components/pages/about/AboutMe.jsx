import Appearance from "@/components/animations/Appearance";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="about-me">
      <section className="about-me__main-grid">
        <article className="about-me__intro-section">
          <Appearance delay={0.1}>
            <header className="about-me__header">
              <h2 className="display-text">
                Fueling web development with endless curiosity and a dash of
                design.
              </h2>
            </header>
          </Appearance>

          <Appearance delay={0.3}>
            <section className="intro-content">
              <p className="content-large-paragraph">
                I am a design minded front-end developer based in Norway. <br />{" "}
                I'm working at the intersection of technical logic and visual
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

      <section className="about-me__details-grid">
        <Appearance delay={0.6} y={20}>
          <article className="details-col">
            <h3 className="col-heading">Currently working on</h3>
            <p className="content-large-paragraph">
              Improving my skills and understanding of JavaScript and React. I'm
              also having fun learning more about{" "}
              <Link
                className="content-link"
                href={"https://motion.dev/"}
                target="_blank"
              >
                Motion
              </Link>
              .
            </p>
            <p className="content-large-paragraph">
              {" "}
              In addition, I'm learning how to build high-performance web apps
              with Next.js and dipping into database management.{" "}
              <Link
                className="content-link"
                href="https://www.martineskorbakk.com/work-archive/holidaze"
                target="_blank"
              >
                Holidaze
              </Link>{" "}
              is my recent project exploring that.
            </p>

            <p className="content-large-paragraph">
              On the design front, I'm continuously exploring user journeys on a
              website and accessibility{" "}
              <Link
                className="content-link"
                href="https://developer.mozilla.org/en-US/docs/Web/Accessibility"
                target="_blank"
              >
                (a11y)
              </Link>
              .
            </p>
          </article>
        </Appearance>

        <Appearance delay={0.7} y={20}>
          <article className="details-col">
            <h3 className="col-heading"> Beyond the Pixels</h3>
            <p className="content-large-paragraph">
              When I'm not at the keyboard, I'm a nature photographer, a crochet
              enthusiast and a lover of a good TV series.
            </p>
            <div className="about-me__image-wrapper">
              <figure className="about-me__image-figure">
                <Image
                  className="about-me__image"
                  fill
                  alt="nature photography"
                  src={"/assets/about/nature-photo.jpg"}
                  sizes="(max-width: 768px) 100vw, 435px"
                  quality={80}
                />
              </figure>
            </div>
          </article>
        </Appearance>
      </section>
    </section>
  );
};

export default AboutMe;
