import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment status
  const [payerName, setPayerName] = useState(""); // Store payer's name

  return (
    <>
      {paymentSuccess ? (
        <div className="flex flex-col items-center justify-center p-6 bg-orange-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-orange-600">
            Thank you for your purchase, {payerName}! Your booking was placed
            and your expenses for traveling was covered
          </h2>
          <p className="mt-4 text-lg text-orange-700">
            Your transaction was successful.
          </p>
          {/* You can add more information here, like order details or links to downloads */}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <PayPalButtons
            className="rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
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
