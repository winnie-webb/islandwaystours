"use client";
import React, { useRef, useState } from "react";
import NumberofPersons from "./NumberofPersons";
import BookingNotes from "./BookingNotes";
import emailjs from "@emailjs/browser";
import BookingSuccessMsg from "./BookingSuccessMsg";
import { useRouter } from "next/navigation";
import { FaLock } from "react-icons/fa";
import { getRateLabel } from "@/app/products/product";

export const TransferBookingForm = ({ tour }) => {
  const form = useRef();
  const placeOfStay = useRef();
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [isMsgSent, setIsMsgSent] = useState(false);
  const [isPayingOnline, setIsPayingOnline] = useState(false);
  const [pricePerPerson, setPricePerPerson] = useState(0);
  const transferTypeRef = useRef();
  const [transferDetails, setTransferDetails] = useState({
    transferType: "",
    placeOfStay: "",
    arrivalDate: "",
    arrivalTime: "",
    airlinesName: "",
    departureDate: "",
    departureTime: "",
    pickupTime: "",
    departureAirlines: "",
    pickupDropoff: "",
  });
  const tourKeys = Object.keys(tour);
  const tourPlaceKeys = tourKeys.filter(
    (key) =>
      key.toLowerCase().includes("price") &&
      key !== "priceLowest" &&
      key !== "priceHighest"
  );
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

  const handleTransferDetailsChange = (name, value) => {
    setTransferDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      tour_name: tour.title,
      email: form.current.email.value,
      phone_number: form.current.phone_number.value,
      pickup_dropoff: transferDetails.pickupDropoff,
      pickup_date: transferDetails.arrivalDate,
      pickup_time: transferDetails.pickupTime,
      transfer_type: transferDetails.transferType,
      place_of_stay: transferDetails.placeOfStay,
      arrival_time: transferDetails.arrivalTime,
      airlines_name: transferDetails.airlinesName,
      departure_date: transferDetails.departureDate,
      departure_time: transferDetails.departureTime,
      departure_airlines_name: transferDetails.departureAirlines,
      adults: adults,
      kids: kids,
      pay_online: isPayingOnline ? "Yes" : "No", // Pay online field
      price_per_person: pricePerPerson,
      total_price: totalPrice,
    };

    emailjs
      .send("service_jkakbwm", "template_c9x6dub", formData, "RR28X9JtFyIaAYPWA")
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

    if (isPayingOnline) {
      return router.push(`/pay?payment=${totalPrice}`);
    }
  };

  return !isMsgSent ? (
    <form
      ref={form}
      id="booking-form"
      className="overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-lift"
      onSubmit={sendEmail}
    >
      <div className="border-b border-ink/[0.07] bg-sand px-6 py-5">
        <h2 className="font-display text-xl font-semibold text-ink">
          Book this transfer
        </h2>
        <p className="mt-1 text-xs text-ink/55">
          Give us your flight details — we track it and adjust for delays.
        </p>
      </div>

      <div className="space-y-5 p-6">
        <BookingNotes />

        {/* Transfer Type */}
        <div>
          <label htmlFor="transfer-type" className="label">
            Transfer type
          </label>
          <select
            id="transfer-type"
            name="transferType"
            ref={transferTypeRef}
            onChange={(e) => {
              handleTransferDetailsChange(e.target.name, e.target.value);
              const placeOfStayValue = placeOfStay.current.value;
              const currentPrice = parseInt(tour[placeOfStayValue], 10);
              if (!isNaN(currentPrice)) {
                if (e.target.value === "PickUpAndDropOff") {
                  setPricePerPerson(currentPrice * 2);
                } else {
                  setPricePerPerson(currentPrice);
                }
              }
            }}
            className="field"
          >
            <option value="">Choose transfer type</option>
            <option value="DropOff">Drop off (place of stay → airport)</option>
            <option value="PickUp">Pick up (airport → place of stay)</option>
            <option value="PickUpAndDropOff">Pickup &amp; drop off (round trip)</option>
          </select>
        </div>

        {/* Place Of Stay */}
        <div>
          <label htmlFor="place-of-stay" className="label">
            Place of stay
          </label>
          <select
            id="place-of-stay"
            name="placeOfStay"
            ref={placeOfStay}
            onChange={(e) => {
              handleTransferDetailsChange(e.target.name, e.target.value);
              const currentPrice = parseInt(tour[e.target.value], 10);
              if (!isNaN(currentPrice)) {
                if (transferTypeRef.current.value === "PickUpAndDropOff") {
                  setPricePerPerson(currentPrice * 2);
                } else {
                  setPricePerPerson(currentPrice);
                }
              }
            }}
            className="field"
          >
            <option value="">Choose place of stay</option>
            {tourPlaceKeys.map((option) => (
              <option key={option} value={option}>
                {getRateLabel(option)}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-xl border border-ink/10 p-4">
          <p className="label mb-3">Arrival</p>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="arrival-date" className="label">
                  Date
                </label>
                <input
                  type="date"
                  id="arrival-date"
                  name="arrivalDate"
                  onChange={(e) =>
                    handleTransferDetailsChange(e.target.name, e.target.value)
                  }
                  className="field"
                  required
                />
              </div>
              <div>
                <label htmlFor="arrival-time" className="label">
                  Landing time
                </label>
                <input
                  type="time"
                  id="arrival-time"
                  name="arrivalTime"
                  onChange={(e) =>
                    handleTransferDetailsChange(e.target.name, e.target.value)
                  }
                  className="field"
                />
              </div>
            </div>
            <div>
              <label htmlFor="airlines-name" className="label">
                Airline &amp; flight number
              </label>
              <input
                type="text"
                id="airlines-name"
                name="airlinesName"
                placeholder="NAME & XYZ1234"
                onChange={(e) =>
                  handleTransferDetailsChange(e.target.name, e.target.value)
                }
                className="field"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-ink/10 p-4">
          <p className="label mb-3">Departure</p>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="departure-date" className="label">
                  Date
                </label>
                <input
                  type="date"
                  id="departure-date"
                  name="departureDate"
                  onChange={(e) =>
                    handleTransferDetailsChange(e.target.name, e.target.value)
                  }
                  className="field"
                  required
                />
              </div>
              <div>
                <label htmlFor="departure-time" className="label">
                  Flight time
                </label>
                <input
                  type="time"
                  id="departure-time"
                  name="departureTime"
                  onChange={(e) =>
                    handleTransferDetailsChange(e.target.name, e.target.value)
                  }
                  className="field"
                />
              </div>
            </div>
            <div>
              <label htmlFor="pickup-time" className="label">
                Pickup time from your resort / villa
              </label>
              <input
                type="time"
                id="pickup-time"
                name="pickupTime"
                onChange={(e) =>
                  handleTransferDetailsChange(e.target.name, e.target.value)
                }
                className="field"
              />
            </div>
            <div>
              <label htmlFor="departure-airlines" className="label">
                Airline &amp; flight number
              </label>
              <input
                type="text"
                id="departure-airlines"
                name="departureAirlines"
                placeholder="NAME & XYZ1234"
                onChange={(e) =>
                  handleTransferDetailsChange(e.target.name, e.target.value)
                }
                className="field"
              />
            </div>
          </div>
        </div>

        {/* Pickup/Drop-off Location */}
        <div>
          <label htmlFor="pickup-dropoff" className="label">
            Pickup / drop-off address
          </label>
          <input
            type="text"
            id="pickup-dropoff"
            name="pickupDropoff"
            placeholder="Resort name, or villa/Airbnb address"
            onChange={(e) =>
              handleTransferDetailsChange(e.target.name, e.target.value)
            }
            className="field"
          />
        </div>

        <NumberofPersons
          onAdultsChange={handleAdultsChange}
          onKidsChange={handleKidsChange}
        ></NumberofPersons>

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
            {pricePerPerson > 0 ? "min. 4 persons" : "pick a place of stay"}
          </span>
        </div>

        <button type="submit" className="btn-primary w-full">
          Confirm Booking
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-[0.7rem] text-ink/45">
          <FaLock className="text-[0.6rem]" />
          Your details go straight to our dispatch inbox.
        </p>
      </div>
    </form>
  ) : (
    <BookingSuccessMsg />
  );
};
