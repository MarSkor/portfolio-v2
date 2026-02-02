import Appearance from "@/components/animations/Appearance";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="not-found__page">
      <section className="not-found__container">
        <section className="not-found__hero">
          <h1 className="bg-404" aria-hidden="true">
            404
          </h1>
          <Appearance delay={0.2} className="witch-wrapper">
            <img
              src="/assets/404-illustration.png"
              alt="Witch Illustration"
              className="witch-img"
            />
          </Appearance>
        </section>

        <section className="not-found__text">
          <h2 className="not-found__text--subtitle">
            Something's Brewed Wrong
          </h2>
          <p className="not-found__text--description">
            The page you are looking for has been vanished by a stray spell.
            Even magic has its glitches.
          </p>
          <Link href="/" className="btn-primary">
            Back to Reality
          </Link>
        </section>
      </section>
    </main>
  );
};

export default NotFound;
