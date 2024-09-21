"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Pickup from "./Pickup";
import NumberofPersons from "./NumberofPersons";
import emailjs from "@emailjs/browser";
import BookingSuccessMsg from "./BookingSuccessMsg";

function BookingForm({ tour }) {
  const form = useRef();
  const [totalPrice, setTotalPrice] = useState(0);
  const [locationMultiplier, setLocationMultiplier] = useState(1);
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [isMsgSent, setIsMsgSent] = useState(false);
  const locationPricing = {
    Falmouth: 1,
    Lucea: 1.1,
    "Montego Bay": 1,
    Negril: 1.3,
    "Ocho Rios": 1.4,
    Runaway: 1.2,
  };

  const calculateTotalPrice = useCallback(() => {
    const pricePerPerson = tour.priceLowest * locationMultiplier;
    const total = adults * pricePerPerson;
    setTotalPrice(total.toFixed(2));
  }, [tour.priceLowest, locationMultiplier, adults]); // Add dependencies

  useEffect(() => {
    calculateTotalPrice();
  }, [tour.priceLowest, locationMultiplier, adults, calculateTotalPrice]);

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocationMultiplier(locationPricing[selectedLocation]);
    calculateTotalPrice();
  };

  const handleAdultsChange = (value) => {
    setAdults(value);
  };

  const handleKidsChange = (value) => {
    setKids(value);
  };

  const sendEmail = (e) => {
    const formData = {
      email: form.current.email.value,
      pickup_dropoff: form.current["pickup-dropoff"].value,
      pickup_date: form.current["pickup-date"].value,
      pickup_time: form.current["pickup-time"].value,
      pickup_location: form.current["pickup-location"].value,
      adults: adults, // From state
      kids: kids, // From state
      pay_online: form.current["pay-online"].checked ? "Yes" : "No", // Pay online field
      price_per_person: (tour.priceLowest * locationMultiplier).toFixed(2),
      total_price: totalPrice, // From state
    };

    emailjs
      .send(
        "service_412v84l",
        "template_id3plor",
        formData, // Use the manually created form data
        "gihsdAW3D3RqHeLSw"
      )
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
      className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-8"
      onSubmit={(e) => {
        e.preventDefault();
        sendEmail();
      }}
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-orange-600">
        Booking Form
      </h2>

      <Pickup onLocationChange={handleLocationChange} />
      <NumberofPersons
        onAdultsChange={handleAdultsChange}
        onKidsChange={handleKidsChange}
      />

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none"
        />
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="pay-online"
          name="pay-online"
          className="mr-2"
        />
        <label htmlFor="pay-online" className="text-gray-700 font-semibold">
          Paying Online
        </label>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        (If you want to pay when you arrive, please leave the box unchecked)
      </p>
      <div className="text-lg mb-4">
        <p>
          Price Per Person: $
          <span id="price-per-person" className="font-semibold">
            {(tour.priceLowest * locationMultiplier).toFixed(2)}
          </span>
        </p>
        <p>
          Total Price: $
          <span id="total-price" className="font-semibold">
            {totalPrice}
          </span>
        </p>
      </div>

      <button
        type="submit"
        id="book-button"
        className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition duration-200"
      >
        Book Now
      </button>
    </form>
  ) : (
    <BookingSuccessMsg isMsgSent={isMsgSent}></BookingSuccessMsg>
  );
}

export default BookingForm;
