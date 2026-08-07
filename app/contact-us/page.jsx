import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import FaqAccordion from "../components/FaqAccordion";
import ContactForm from "./ContactForm";
import { site } from "../data/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Message Island Ways Tours about a private airport transfer, island tour or cruise-pier excursion in Jamaica. We answer seven days a week.",
};

const CHANNELS = [
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    value: site.contact.phone,
    href: site.contact.whatsappHref,
    note: "Fastest way to reach us",
    external: true,
  },
  {
    Icon: FaPhoneAlt,
    label: "Phone",
    value: site.contact.phone,
    href: site.contact.phoneHref,
    note: "Seven days a week",
  },
  {
    Icon: FaEnvelope,
    label: "Email",
    value: site.contact.email,
    href: site.contact.emailHref,
    note: "For longer itineraries",
  },
];

const SOCIALS = [
  { href: site.social.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: site.social.instagram, label: "Instagram", Icon: FaInstagram },
  { href: site.social.tiktok, label: "TikTok", Icon: FaTiktok },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's plan the day."
        description="Airport transfer, cruise pickup or a full island day — tell us what you need and we'll come back with a plan and a price."
        image="/local/hero-6.jpg"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="shell py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Channels */}
          <div>
            <SectionHeading
              eyebrow="Talk to us"
              title="However you like to get in touch."
              description="A real person answers, and it's usually the same person who'll be driving you."
            />

            <ul className="space-y-3">
              {CHANNELS.map(({ Icon, label, value, href, note, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-ink/[0.07] bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-palm-200 hover:shadow-lift"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-palm-50 text-palm-600 transition-colors group-hover:bg-palm-600 group-hover:text-white">
                      <Icon className="text-lg" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink/45">
                        {label}
                      </span>
                      <span className="block truncate font-display text-lg font-semibold text-ink">
                        {value}
                      </span>
                      <span className="block text-xs text-ink/50">{note}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-ink/[0.07] bg-sand p-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-palm-600 shadow-sm">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Based in {site.base.city}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {site.base.parish}, {site.base.country} — covering the whole
                    island, from Sangster International to Kingston, Negril,
                    Ocho Rios, Falmouth and the South Coast.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {site.hours}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-2.5 border-t border-ink/[0.07] pt-5">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink/60 shadow-sm transition hover:bg-palm-600 hover:text-white"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-16 lg:py-24">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Before you ask"
            title="Frequently asked questions."
            description="The things guests want to know before they book. Anything else, just message us."
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
