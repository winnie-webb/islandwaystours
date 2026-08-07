"use client";
import React from "react";
import { TourBookingForm } from "./TourBookingForm";
import { TransferBookingForm } from "./TransferBookingForm";

function BookingForm({ tour }) {
  // Airport transfers collect flight details and a place of stay; everything
  // else uses the simpler pickup-area form.
  const isAirportTransfer = tour.category === "at";
  return isAirportTransfer ? (
    <TransferBookingForm tour={tour} />
  ) : (
    <TourBookingForm tour={tour} />
  );
}

export default BookingForm;
