import Link from "next/link";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { site } from "@/app/data/site";

function BookingSuccessMsg() {
  return (
    <div className="rounded-2xl border border-ink/[0.07] bg-white p-8 text-center shadow-lift">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-palm-50 text-palm-600">
        <FaCheckCircle className="text-2xl" />
      </span>
      <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
        Booking request received.
      </h2>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/60">
        Thank you — we have your details. We&apos;ll confirm your driver and
        pickup time by email shortly. If your trip is soon, message us on
        WhatsApp and we&apos;ll confirm right away.
      </p>

      <div className="mt-7 flex flex-col gap-2">
        <a
          href={site.contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="btn-primary w-full"
        >
          <FaWhatsapp className="text-base" />
          WhatsApp {site.contact.phone}
        </a>
        <Link href="/tours" className="btn-ghost w-full">
          Browse more tours
        </Link>
      </div>
    </div>
  );
}

export default BookingSuccessMsg;
