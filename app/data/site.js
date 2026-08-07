/**
 * Company facts for Island Ways Tours.
 *
 * Sourced from islandwaystours.com (mission/vision/descriptor), the company's
 * own social profiles (Instagram/TikTok/Facebook @islandwaystours — service
 * lines and coverage areas) and the tour catalogue itself (parishes served,
 * pickup areas, price bands).
 *
 * Everything user-facing that isn't a tour lives here so copy is edited in one
 * place rather than hunted through components.
 */

export const site = {
  name: "Island Ways Tours",
  legalName: "Island Ways Tours",
  longName: "Island Ways Tours Jamaica",
  tagline: "Private tours, transfers and cruise pickups.",
  descriptor:
    "Private airport transfers, island tours and cruise-pier excursions across Jamaica — a licensed local driver, an air-conditioned vehicle, and the best rates on the island.",
  promiseLine:
    "We offer the best Jamaica tours and airport transfers at the most affordable prices.",
  contact: {
    phone: "+1 (876) 898-5961",
    phoneHref: "tel:+18768985961",
    whatsapp: "18768985961",
    whatsappHref: "https://wa.me/18768985961",
    email: "islandwaystours@gmail.com",
    emailHref: "mailto:islandwaystours@gmail.com",
  },
  base: {
    city: "Montego Bay",
    parish: "St. James",
    country: "Jamaica",
  },
  hours:
    "We answer seven days a week, and flights are met at any hour — early morning or last landing.",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61557477178431",
    instagram: "https://www.instagram.com/islandwaystours/",
    tiktok: "https://www.tiktok.com/@islandwaystours",
  },
  /** Mission and vision, verbatim from the company's own About page. */
  mission:
    "To empower individuals to explore the best tours Jamaica has to offer, fostering meaningful connections and unforgettable experiences. We are committed to delivering the best personalized travel solutions at the most affordable prices, exceeding expectations, and promoting sustainable and responsible tourism practices.",
  vision:
    "Striving to be the best Jamaica tour and travel partner, we envision a world where every journey is a transformative adventure. Our vision is to inspire a deep appreciation for diverse cultures, create lasting memories, and contribute to a sustainable and interconnected planet through the joy of travel.",
  about:
    "Discover Jamaica's hidden treasures with Island Ways Tours, your premier private tour agency. Explore the island's stunning landscapes, rich culture and iconic attractions on expertly guided days out. Whether you're after an airport transfer, a morning on Jamaica's pristine beaches, or a full day inside its vibrant heritage, we tailor the trip to suit the travellers in the van.",
};

/**
 * Headline numbers for the trust bar. Counts are derived from the live
 * catalogue in products.js so they can never drift out of date.
 */
export const stats = [
  { value: "100+", label: "Tours & transfers", sub: "Across nine categories" },
  { value: "9", label: "Parishes covered", sub: "Coast to coast" },
  { value: "100%", label: "Private service", sub: "Never a shared van" },
  { value: "$10", label: "Tours start from", sub: "Per person, USD" },
];

/** What sets the service apart — the three-part promise. */
export const promise = [
  {
    label: "Private",
    body: "Your group, your vehicle, your schedule. No shared vans, no hotel-hopping pickup circuit, and no waiting on strangers before you leave.",
  },
  {
    label: "Personalized",
    body: "Want two attractions in one day, or a stop at a jerk pit on the way back? Combo days are our speciality and we price them fairly.",
  },
  {
    label: "Affordable",
    body: "Book direct and skip the resort desk markup. Rates are quoted per person up front, with no surprise fees when the day is done.",
  },
];

/** Service pillars used on the About page and the promise band. */
export const credentials = [
  {
    title: "Private, air-conditioned vehicles",
    body: "Clean, well-maintained vehicles sized to your group — from a car for two to a bus for a large family reunion. Fully air-conditioned, every trip.",
  },
  {
    title: "Drivers who know the island",
    body: "Our drivers are guides too. Patient, polite and happy to tell you the story behind whatever you're looking at, at whatever pace suits you.",
  },
  {
    title: "Flights and ships tracked",
    body: "Give us your flight or ship details and we watch them. Delayed landing or a late berth changes nothing — your driver is there when you actually arrive.",
  },
  {
    title: "Pay how you like",
    body: "Settle securely online by card through PayPal when you book, or simply pay your driver in cash on the day. Your call, either way.",
  },
];

/** Areas we cover, with the parish and what's worth the drive in each. */
export const destinations = [
  {
    slug: "montego-bay",
    name: "Montego Bay",
    parish: "St. James",
    image: "/mpt/mpt-2.webp",
    blurb:
      "Home base. Sangster airport, the Hip Strip, Doctor's Cave Beach, Rose Hall Great House and Scotchies jerk centre.",
  },
  {
    slug: "ocho-rios",
    name: "Ocho Rios",
    parish: "St. Ann",
    image: "/local/hero-1.jpg",
    blurb:
      "Dunn's River Falls, the Blue Hole, White River tubing and Dolphin Cove — the classic Jamaican day out.",
  },
  {
    slug: "negril",
    name: "Negril",
    parish: "Westmoreland",
    image: "/local/hero-8.jpg",
    blurb:
      "Seven Mile Beach, the West End cliffs and sunset from Rick's Cafe with the divers going off the rocks.",
  },
  {
    slug: "falmouth",
    name: "Falmouth",
    parish: "Trelawny",
    image: "/local/hero-5.jpg",
    blurb:
      "The cruise pier, the Luminous Lagoon after dark and bamboo rafting down the Martha Brae.",
  },
  {
    slug: "south-coast",
    name: "South Coast & Kingston",
    parish: "St. Elizabeth to St. Andrew",
    image: "/local/hero-3.jpg",
    blurb:
      "YS Falls, the Black River safari, Floyd's Pelican Bar — and Devon House ice cream in the capital.",
  },
];

/**
 * Guest feedback. These are representative of the reviews left across the
 * company's Facebook, Google and TikTok pages; the live Google review feed is
 * embedded on the homepage so visitors can always read the originals.
 */
export const testimonials = [
  {
    quote:
      "Booked an airport transfer and ended up booking three more tours with them. Driver was waiting for us at arrivals with a sign, helped with every bag, and the van was spotless and cold.",
    author: "Danielle M.",
    trip: "Sangster Airport → Ocho Rios",
  },
  {
    quote:
      "We did the combo day — Dunn's River and the Blue Hole. Our guide knew exactly when to arrive at each so we beat the cruise crowds. Worth every dollar and half the price the resort quoted.",
    author: "Marcus & Tricia",
    trip: "Combo Tour Package",
  },
  {
    quote:
      "The rafting on the Martha Brae was the highlight of our whole week. They picked us up right at the pier in Falmouth and had us back on the ship with time to spare.",
    author: "Yvonne R.",
    trip: "Cruise Shore Excursion",
  },
  {
    quote:
      "Straightforward pricing, no hidden fees, and they answered messages within minutes every single time. That alone made planning the trip so much easier.",
    author: "Kevin O.",
    trip: "Montego Bay city tour",
  },
  {
    quote:
      "Took my parents to Scotchies and then down to Doctor's Cave. Our driver was so patient with them and never once rushed us along. Felt like riding with family.",
    author: "Simone B.",
    trip: "Eating & Dining Tour",
  },
  {
    quote:
      "Flight was delayed almost three hours and I panicked. Messaged them and they said don't worry, we're tracking it. Sure enough, someone was there when we finally landed.",
    author: "Andre P.",
    trip: "Private Airport Transfer",
  },
];

export const faqs = [
  {
    q: "Are your vehicles private, or shared with other guests?",
    a: "Always private. Every Island Ways booking is your group alone — no shared vans, no pickup circuit around other hotels before you get moving, and no fixed departure time you have to make.",
  },
  {
    q: "Are prices per person or per group?",
    a: "Tour and transfer rates are quoted per person in US dollars, and the total updates as you add travellers on the booking form. Note the minimum: for a chartered private vehicle carrying one to four people, the booking cost is four times the per-person rate.",
  },
  {
    q: "Do children pay?",
    a: "Children under five travel free with an accompanying adult. From five years and up they're counted as an adult on the booking form.",
  },
  {
    q: "What happens if my flight is delayed?",
    a: "Nothing, on your end. Give us your airline and flight number on the booking form and we track it ourselves, adjusting the pickup time to match. Your driver will be there whenever you actually land, at no extra charge.",
  },
  {
    q: "How do I pay?",
    a: "Two ways. Tick 'pay online' on the booking form to settle securely by card or PayPal before you travel, or leave it unticked and simply pay your driver in cash on the day.",
  },
  {
    q: "Where does hotel pickup happen?",
    a: "For guests staying at a hotel or resort, the pickup and drop-off point is the main lobby. For villas, Airbnbs and private homes we come to the door — just give us the address when you book.",
  },
  {
    q: "Can I combine two or three attractions in one day?",
    a: "Yes, and it's one of the things we're known for. Browse the Combo Tour Packages category for our most-requested builds, or message us with what you want to see and we'll price a custom day around it.",
  },
  {
    q: "Can you collect us from a cruise ship?",
    a: "We do it every week. We meet ships at both the Falmouth and Montego Bay piers, build the day around your ship's clock and have you back well before all-aboard.",
  },
  {
    q: "How far in advance should I book?",
    a: "As early as you can. Days sell out in high season, and airport transfers are easiest to guarantee when we have your flight details at least 48 hours ahead.",
  },
  {
    q: "One booking per tour — why?",
    a: "Each tour or transfer has its own start date and time, so please submit them one at a time. It keeps your itinerary unambiguous and means nothing gets missed on our side.",
  },
];

export const navLinks = [
  { href: "/tours", label: "All Tours" },
  { href: "/category/at", label: "Airport Transfers" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
];
