"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactForm() {
  const form = useRef();
  const [isMsgSent, setIsMsgSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_b3u5aaa",
        "template_fdddd",
        form.current,
        "nxC4W-fiaC4Dssssss"
      )
      .then(
        () => {
          setIsMsgSent(true);
        },
        (error) => {
          console.error("Error sending email:", error);
          setIsMsgSent(true);
        }
      );
  };

  if (isMsgSent) {
    return (
      <div className="card p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-palm-50 text-palm-600">
          <FaCheckCircle className="text-2xl" />
        </span>
        <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
          Thank you — message received.
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink/60">
          We&apos;ll get back to you shortly. If it&apos;s urgent, WhatsApp is
          always the fastest way to reach us.
        </p>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="card p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold text-ink">
        Send us a message
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink/55">
        Tell us your dates, your group size and what you&apos;d like to see. The
        more detail, the better the plan we can send back.
      </p>

      <div className="mt-7 space-y-5">
        <div>
          <label htmlFor="name" className="label">
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Jane Brown"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="message" className="label">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            placeholder="Arriving 14 March, four adults, staying in Ocho Rios. Looking for an airport transfer and a Dunn's River day."
            className="field resize-y"
          />
        </div>
      </div>

      <button type="submit" disabled={isSending} className="btn-primary mt-7 w-full">
        <FaPaperPlane className="text-xs" />
        {isSending ? "Sending…" : "Send message"}
      </button>

      <p className="mt-4 text-center text-xs text-ink/45">
        We reply seven days a week, usually within the hour.
      </p>
    </form>
  );
}
