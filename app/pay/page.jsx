"use client";

import React, { useState, Suspense } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { FaLock, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import PayPalButton from "../components/PaypalBtn";
import "./iframe.css";
import { useSearchParams } from "next/navigation";
import { site } from "../data/site";

const PaymentComponent = () => {
  const paymentParams = useSearchParams();
  const queryAmount = paymentParams.get("payment");
  const [amount, setAmount] = useState(queryAmount ?? "");

  // Keep the field in step if the ?payment= value changes under us, without
  // clobbering an amount the guest has typed in themselves.
  const [lastQuery, setLastQuery] = useState(queryAmount);
  if (queryAmount !== lastQuery) {
    setLastQuery(queryAmount);
    if (queryAmount) setAmount(queryAmount);
  }

  return (
    <section className="bg-sand py-14 lg:py-20">
      <div className="shell">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Secure checkout</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {queryAmount ? "Complete your booking" : "Make a payment"}
          </h1>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/60">
            {queryAmount
              ? "Your booking request is already with our dispatch team. Settle the balance below and you're all set."
              : "Paying an outstanding balance or a quote we sent you? Enter the amount below."}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-md">
          <div className="overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-lift">
            <div className="border-b border-ink/[0.07] px-6 py-5">
              <label htmlFor="payment-amount" className="label">
                Amount to pay (USD)
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-display text-lg font-semibold text-ink/40">
                  $
                </span>
                <input
                  id="payment-amount"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="field py-4 pl-9 font-display text-xl font-semibold"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              {queryAmount && (
                <p className="mt-2.5 text-xs text-ink/50">
                  Total carried over from your booking form. You can adjust it if
                  we quoted you something different.
                </p>
              )}
            </div>

            <div className="p-6">
              {Number(amount) > 0 ? (
                <PayPalButton amount={parseFloat(amount)} />
              ) : (
                <p className="rounded-xl border border-dashed border-ink/15 py-8 text-center text-sm text-ink/45">
                  Enter an amount above to continue.
                </p>
              )}

              <ul className="mt-6 space-y-2.5 border-t border-ink/[0.07] pt-5 text-xs text-ink/55">
                <li className="flex items-center gap-2.5">
                  <FaLock className="shrink-0 text-palm-600" />
                  Processed securely by PayPal — we never see your card details.
                </li>
                <li className="flex items-center gap-2.5">
                  <FaShieldAlt className="shrink-0 text-palm-600" />
                  Mastercard, Visa and Visa Debit accepted, with or without a
                  PayPal account.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-ink/55">
            Something not right?{" "}
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-palm-700 hover:text-palm-800"
            >
              <FaWhatsapp />
              Message us
            </a>{" "}
            and we&apos;ll sort it out.
          </p>
        </div>
      </div>
    </section>
  );
};

const PaymentPage = () => {
  return (
    <PayPalScriptProvider
      options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_API_KEY }}
    >
      <Suspense
        fallback={
          <div className="shell py-24 text-center text-sm text-ink/50">
            Loading checkout…
          </div>
        }
      >
        <PaymentComponent />
      </Suspense>
    </PayPalScriptProvider>
  );
};

export default PaymentPage;
