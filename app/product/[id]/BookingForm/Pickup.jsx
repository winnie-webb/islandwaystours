import React from "react";
import { getRateLabel } from "@/app/products/product";

function Pickup({ tour, setPricePerPerson }) {
  const tourKeys = Object.keys(tour);
  const tourPickupKeys = tourKeys.filter(
    (key) =>
      key.includes("price") && key !== "priceLowest" && key !== "priceHighest"
  );

  return (
    <>
      <div>
        <label htmlFor="pickup-dropoff" className="label">
          Pick up &amp; drop off area
        </label>
        <select
          id="pickup-dropoff"
          name="pickup-dropoff"
          required
          onChange={(e) => {
            const currentPrice = parseInt(tour[e.target.value], 10);
            if (!isNaN(currentPrice)) {
              setPricePerPerson(currentPrice.toFixed(2));
            }
          }}
          className="field"
        >
          <option value="0">Choose pick up &amp; drop off</option>
          {tourPickupKeys.map((pickup) => (
            <option key={pickup} value={pickup}>
              {getRateLabel(pickup)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="pickup-date" className="label">
            Date of tour
          </label>
          <input
            type="date"
            id="pickup-date"
            name="pickup-date"
            required
            className="field"
          />
        </div>

        <div>
          <label htmlFor="pickup-time" className="label">
            Pickup time
          </label>
          <input
            type="time"
            id="pickup-time"
            name="pickup-time"
            required
            className="field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="pickup-location" className="label">
          Resort, villa address or cruise pier
        </label>
        <input
          type="text"
          id="pickup-location"
          name="pickup-location"
          required
          placeholder="e.g. Riu Montego Bay, main lobby"
          className="field"
        />
      </div>
    </>
  );
}

export default Pickup;
