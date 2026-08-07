import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { site, destinations } from "../data/site";
import { CATEGORIES } from "../products/product";
import Logo from "./Logo";

const socials = [
  { href: site.social.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: site.social.instagram, label: "Instagram", Icon: FaInstagram },
  { href: site.social.tiktok, label: "TikTok", Icon: FaTiktok },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/65">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-palm-600/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {site.descriptor}
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.07] text-white/75 transition hover:bg-palm-600 hover:text-white"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Tours */}
          <nav aria-label="Tours">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Tours
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {CATEGORIES.slice(0, 6).map((c) => (
                <li key={c.type}>
                  <Link
                    href={`/category/${c.type}`}
                    className="transition hover:text-gold-400"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tours"
                  className="font-medium text-gold-400 hover:text-gold-300"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Destinations */}
          <nav aria-label="Destinations">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Destinations
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {destinations.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destinations#${d.slug}`}
                    className="transition hover:text-gold-400"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about-us" className="transition hover:text-gold-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="transition hover:text-gold-400">
                  Contact &amp; FAQ
                </Link>
              </li>
              <li>
                <Link href="/pay" className="transition hover:text-gold-400">
                  Make a payment
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-palm-300" />
                <address className="not-italic leading-relaxed">
                  Based in {site.base.city}
                  <br />
                  {site.base.parish}, {site.base.country}
                  <br />
                  <span className="text-white/45">Serving the whole island</span>
                </address>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center gap-3 transition hover:text-gold-400"
                >
                  <FaPhoneAlt className="shrink-0 text-palm-300" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition hover:text-gold-400"
                >
                  <FaWhatsapp className="shrink-0 text-palm-300" />
                  WhatsApp / Messenger
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  className="flex items-center gap-3 break-all transition hover:text-gold-400"
                >
                  <FaEnvelope className="shrink-0 text-palm-300" />
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="text-white/45">{site.promiseLine}</p>
        </div>
      </div>
    </footer>
  );
}
