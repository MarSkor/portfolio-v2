import ContactForm from "@/components/pages/contact/ContactForm";
import ContactInformation from "@/components/pages/contact/ContactInformation";
import PageHeading from "@/components/ui/PageHeading";

export const metadata = {
  title: "Contact",
  description: `Looking for a freelance developer or a design-heavy frontend engineer? Let’s talk about your next project.`,
};

const ContactPage = () => {
  return (
    <section className="container container-xl container-page">
      <header className="contact__header flex-center">
        <PageHeading text={"Contact"} size="h1" />
      </header>
      <section className="contact__grid">
        <ContactInformation />
        <ContactForm />
      </section>
    </section>
  );
};

export default ContactPage;
