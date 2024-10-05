"use client";

import React, { useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalButton from "../components/PaypalBtn";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setAmount(value); // Update the state as the user types
  };

  return (
    <PayPalScriptProvider
      options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_API_KEY }}
    >
      <section className="min-h-[100vh] p-4 md:p-10 bg-gray-50">
        <h1 className="text-3xl mb-10 text-center">Make a payment</h1>
        <input
          type="number"
          placeholder="Payment Amount"
          className="p-2 shadow-md w-[90%] md:w-[30%] mx-auto block mb-10"
          value={amount} // Controlled input
          onChange={handleChange}
        />
        <div className="md:w-[30%] mx-auto">
          <PayPalButton amount={parseFloat(amount).toFixed(2)} />
        </div>
        <span className="text-black mt-4 font-bold text-center block">
          {
            "(Please ensure that the amount you enter is same as the price that was sent to you)"
          }
        </span>
      </section>
    </PayPalScriptProvider>
  );
};

export default PaymentPage;
