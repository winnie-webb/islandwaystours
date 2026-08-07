import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { FaCheckCircle } from "react-icons/fa";

const PayPalButton = ({ amount }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment status
  const [payerName, setPayerName] = useState(""); // Store payer's name

  return (
    <>
      {paymentSuccess ? (
        <div className="rounded-xl bg-palm-50 p-6 text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-palm-600 shadow-sm">
            <FaCheckCircle className="text-xl" />
          </span>
          <h2 className="mt-4 font-display text-xl font-semibold text-ink">
            Payment received{payerName ? `, ${payerName}` : ""} — thank you.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">
            Your transaction was successful and your booking is covered.
            We&apos;ll be in touch with your driver and pickup details.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <PayPalButtons
            className="w-full"
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                      breakdown: {
                        item_total: { value: amount, currency_code: "USD" },
                      },
                    },
                    description: "Digital Goods Payment",
                  },
                ],
                application_context: {
                  shipping_preference: "NO_SHIPPING", // For digital goods, shipping is not required
                  payment_method: {
                    payer_selected: "PAYPAL",
                    payee_preferred: "IMMEDIATE_PAYMENT_REQUIRED",
                  },
                },
              });
            }}
            onApprove={async (data, actions) => {
              return actions.order.capture().then(function (details) {
                setPayerName(details.payer.name.given_name);
                setPaymentSuccess(true);
              });
            }}
            forceReRender={[amount]}
          />
        </div>
      )}
    </>
  );
};

export default PayPalButton;
