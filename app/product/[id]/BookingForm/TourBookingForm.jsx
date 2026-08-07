"use client";
import React, { useRef, useState } from "react";
import Pickup from "./Pickup";
import NumberofPersons from "./NumberofPersons";
import BookingNotes from "./BookingNotes";
import emailjs from "@emailjs/browser";
import BookingSuccessMsg from "./BookingSuccessMsg";
import { useRouter } from "next/navigation";
import { FaLock } from "react-icons/fa";

export const TourBookingForm = ({ tour }) => {
  const form = useRef();
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [isMsgSent, setIsMsgSent] = useState(false);
  const [isPayingOnline, setIsPayingOnline] = useState(false);
  const [pricePerPerson, setPricePerPerson] = useState(0);
  const router = useRouter();

  // Derived, not stored: 1–4 guests pay the four-person charter minimum, five
  // or more pay per head. Same arithmetic as before, one render instead of two.
  const totalPrice =
    adults <= 4 && adults !== 0
      ? pricePerPerson * 4
      : (adults * pricePerPerson).toFixed(2);

  const handleAdultsChange = (value) => {
    setAdults(value);
  };

  const handleKidsChange = (value) => {
    setKids(value);
  };

  const sendEmail = () => {
    const formData = {
      tour_name: tour.title,
      email: form.current.email.value,
      phone_number: form.current.phone_number.value,
      tourName: tour.title,
      pickup_dropoff: form.current["pickup-dropoff"].value,
      pickup_date: form.current["pickup-date"].value,
      pickup_time: form.current["pickup-time"].value,
      pickup_location: form.current["pickup-location"].value,
      adults: adults,
      kids: kids,
      pay_online: isPayingOnline ? "Yes" : "No", // Pay online field
      price_per_person: pricePerPerson,
      total_price: totalPrice,
    };

    emailjs
      .send("service_jkakbwm", "template_ibknzsh", formData, "RR28X9JtFyIaAYPWA")
      .then(
        () => {
          setIsMsgSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(
            "Error sending email. Please try to dm us on Facebook messenger, Instagram, or Whatsapp"
          );
        }
      );
  };

  return !isMsgSent ? (
    <form
      ref={form}
      id="booking-form"
      className="overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-lift"
      onSubmit={(e) => {
        e.preventDefault();
        sendEmail();
        if (isPayingOnline) {
          return router.push(`/pay?payment=${totalPrice}`);
        }
        setIsMsgSent(!isMsgSent);
      }}
    >
      <div className="border-b border-ink/[0.07] bg-sand px-6 py-5">
        <h2 className="font-display text-xl font-semibold text-ink">
          Book this tour
        </h2>
        <p className="mt-1 text-xs text-ink/55">
          No payment needed now unless you want to settle online.
        </p>
      </div>

      <div className="space-y-5 p-6">
        <BookingNotes />

        <Pickup tour={tour} setPricePerPerson={setPricePerPerson} />
        <NumberofPersons
          onAdultsChange={handleAdultsChange}
          onKidsChange={handleKidsChange}
        />

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
          <label htmlFor="phone_number" className="label">
            Phone number
          </label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            required
            placeholder="+1 555 000 0000"
            className="field"
          />
        </div>

        <label
          htmlFor="pay-online"
          className="flex cursor-pointer items-start gap-3 rounded-xl border border-ink/10 bg-sand p-4 transition hover:border-palm-200"
        >
          <input
            type="checkbox"
            id="pay-online"
            name="pay-online"
            className="mt-0.5 h-4 w-4 shrink-0 accent-palm-600"
            onChange={(e) => {
              setIsPayingOnline(e.target.checked);
            }}
          />
          <span>
            <span className="block text-sm font-semibold text-ink">
              I&apos;d like to pay online
            </span>
            <span className="mt-0.5 block text-xs leading-relaxed text-ink/55">
              Leave this unchecked to pay your driver in cash on the day.
            </span>
          </span>
        </label>

        <div className="flex items-end justify-between rounded-xl bg-ink px-5 py-4">
          <div>
            <span className="block text-[0.68rem] font-medium uppercase tracking-wider text-white/50">
              Total
            </span>
            <span
              id="total-price"
              className="font-display text-3xl font-semibold text-gold-400"
            >
              ${totalPrice}
            </span>
          </div>
          <span className="pb-1 text-right text-[0.7rem] leading-tight text-white/45">
            USD
            <br />
            {pricePerPerson > 0 ? "min. 4 persons" : "pick an area"}
          </span>
        </div>

        <button type="submit" id="book-button" className="btn-primary w-full">
          Book Now
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-[0.7rem] text-ink/45">
          <FaLock className="text-[0.6rem]" />
          Your details go straight to our dispatch inbox.
        </p>
      </div>
    </form>
  ) : (
    <BookingSuccessMsg isMsgSent={isMsgSent}></BookingSuccessMsg>
  );
};
