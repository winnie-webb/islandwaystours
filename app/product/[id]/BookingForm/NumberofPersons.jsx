import React from "react";

function NumberofPersons({ onAdultsChange, onKidsChange }) {
  const handleAdultsChange = (e) => {
    onAdultsChange(parseInt(e.target.value) || 0);
  };

  const handleKidsChange = (e) => {
    onKidsChange(parseInt(e.target.value) || 0);
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <label htmlFor="persons-over-5" className="label">
          Adults (5 yrs+)
        </label>
        <input
          type="number"
          id="persons-over-5"
          name="persons-over-5"
          min="1"
          placeholder="0"
          onChange={handleAdultsChange}
          className="field"
        />
      </div>

      <div>
        <label htmlFor="kids-under-5" className="label">
          Kids (under 5)
        </label>
        <input
          type="number"
          id="kids-under-5"
          name="kids-under-5"
          min="0"
          placeholder="0"
          onChange={handleKidsChange}
          className="field"
        />
      </div>
    </div>
  );
}

export default NumberofPersons;
