"use client";
import {
  ArrowRight01Icon,
  CheckmarkCircleIcon,
} from "@hugeicons/core-free-icons/index";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Message sent successfully!");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => reset(), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="content-col contact__form-container contact-card contact__form">
      <form onSubmit={handleSubmit(onSubmit)} className="contact__form form">
        <fieldset className={`form__field ${errors.name ? "has-error" : ""}`}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Lorem Ipsum"
            {...register("name")}
            required
            autoComplete="off"
            className={errors.name ? "input--error" : ""}
          />
          {errors.name && (
            <span className="error-msg">{errors.name.message}</span>
          )}
        </fieldset>
        <fieldset className={`form__field ${errors.email ? "has-error" : ""}`}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Lorem@Ipsum"
            {...register("email")}
            required
            autoComplete="off"
            className={errors.email ? "input--error" : ""}
          />
          {errors.email && (
            <span className="error-msg">{errors.email.message}</span>
          )}
        </fieldset>
        <fieldset
          className={`form__field ${errors.subject ? "has-error" : ""}`}
        >
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Hi"
            {...register("subject")}
            required
            autoComplete="off"
            className={errors.subject ? "input--error" : ""}
          />
          {errors.subject && (
            <span className="error-msg">{errors.subject.message}</span>
          )}
        </fieldset>
        <fieldset
          className={`form__field ${errors.message ? "has-error" : ""}`}
        >
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            rows={5}
            placeholder="What's on your mind?"
            {...register("message")}
            required
            autoComplete="off"
            className={errors.message ? "input--error" : ""}
          />
          {errors.message && (
            <span className="error-msg">{errors.message.message}</span>
          )}
        </fieldset>
        <button
          type="submit"
          className={`btn-glass ${isSubmitting ? "is-loading" : ""} ${isSubmitSuccessful ? "is-success" : ""}`}
          disabled={isSubmitting || isSubmitSuccessful}
        >
          <div className="btn-glass__liquid"></div>
          <div className="btn-glass__shimmer"></div>
          <div className="btn-glass__content">
            <span className="btn-glass__text">
              {isSubmitting
                ? "Sending..."
                : isSubmitSuccessful
                  ? "Message Sent"
                  : "Send Message"}
            </span>

            <div className="btn-glass__icon">
              {isSubmitSuccessful ? (
                <HugeiconsIcon
                  icon={CheckmarkCircleIcon}
                  className="icon-check"
                />
              ) : (
                <HugeiconsIcon icon={ArrowRight01Icon} className="icon-arrow" />
              )}
            </div>
          </div>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
