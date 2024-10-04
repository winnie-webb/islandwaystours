import React from "react";

function Pickup() {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="pickup-dropoff"
          className="block text-gray-700 font-semibold mb-2"
        >
          Pick Up &amp; Drop Off Area/City:
        </label>
        <select
          id="pickup-dropoff"
          name="pickup-dropoff"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none"
        >
          <option value="" disabled>
            Choose pick up &amp; drop off
          </option>
          <option value="Falmouth">Falmouth &amp; Duncans (Trelawny)</option>
          <option value="Lucea">Lucea (Grand Palladium, Hanover)</option>
          <option value="Montego Bay">Montego Bay (St. James)</option>
          <option value="Negril">Negril (Westmoreland)</option>
          <option value="Ocho Rios">Ocho Rios (St. Ann)</option>
          <option value="Runaway">Runaway Bay (St. Ann)</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="pickup-date"
          className="block text-gray-700 font-semibold mb-2"
        >
          Pickup Date of Tour:
        </label>
        <input
          type="date"
          id="pickup-date"
          name="pickup-date"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="pickup-time"
          className="block text-gray-700 font-semibold mb-2"
        >
          Pickup Time of Tour:
        </label>
        <input
          type="time"
          id="pickup-time"
          name="pickup-time"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="pickup-location"
          className="block text-gray-700 font-semibold mb-2"
        >
          Pickup &amp; Drop Off Resort Name OR AirBnb/Villa/Home Address OR
          Cruise Ship Port Name:
        </label>
        <input
          type="text"
          id="pickup-location"
          name="pickup-location"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none"
        />
      </div>
    </>
  );
}

export default Pickup;
