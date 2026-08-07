import { FaInfoCircle } from "react-icons/fa";

const NOTES = [
  {
    label: "Chartered / private taxi",
    body: "Minimum booking cost for 1–4 persons is four times the per-person rate.",
  },
  {
    label: "One tour per booking",
    body: "Please book one tour or transfer at a time — each has its own start date and time.",
  },
  {
    label: "Hotel pickup",
    body: "For guests at a hotel or resort, the pickup and drop-off point is the main lobby.",
  },
  {
    label: "Children under 5",
    body: "Travel free with an accompanying adult.",
  },
];

/** The four things every guest needs to know before they fill anything in. */
export default function BookingNotes() {
  return (
    <div className="rounded-xl border border-gold-200 bg-gold-100/50 p-4">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/70">
        <FaInfoCircle className="text-gold-500" />
        Before you book
      </p>
      <ul className="mt-3 space-y-2">
        {NOTES.map((n) => (
          <li key={n.label} className="text-xs leading-relaxed text-ink/65">
            <span className="font-semibold text-ink/85">{n.label}:</span> {n.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
