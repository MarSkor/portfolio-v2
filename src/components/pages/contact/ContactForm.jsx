"use client";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight01Icon,
  CheckmarkCircleIcon,
} from "@hugeicons/core-free-icons/index";
import { contactSchema } from "@/lib/contactSchema";

const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [serverState, sendToFormspree] = useFormspree(
    process.env.NEXT_PUBLIC_FORM_ID,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    await sendToFormspree(data);
  };

  useEffect(() => {
    if (serverState.succeeded) {
      reset();
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [serverState.succeeded, reset]);

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
            rows={4}
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
          className={`btn-glass ${serverState.submitting ? "is-loading" : ""} ${showSuccess ? "is-success" : ""} ${
            serverState.errors ? "is-error" : ""
          }`}
          disabled={serverState.submitting || showSuccess}
        >
          <div className="btn-glass__liquid"></div>
          <div className="btn-glass__shimmer"></div>
          <div className="btn-glass__content">
            <span className="btn-glass__text">
              {serverState.submitting
                ? "Sending..."
                : showSuccess
                  ? "Message Sent"
                  : serverState.errors
                    ? "Try Again"
                    : "Send Message"}
            </span>

            <div className="btn-glass__icon">
              {showSuccess ? (
                <HugeiconsIcon
                  icon={CheckmarkCircleIcon}
                  className="icon-check"
                />
              ) : serverState.errors ? (
                <HugeiconsIcon
                  icon={CheckmarkCircleIcon}
                  className="icon-error"
                />
              ) : (
                <HugeiconsIcon icon={ArrowRight01Icon} className="icon-arrow" />
              )}
            </div>
          </div>
        </button>
        {serverState.errors && !serverState.submitting && (
          <div className="form__error-message">
            <p>
              Ops! Something went wrong. Please check the fields and try again.
            </p>
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
