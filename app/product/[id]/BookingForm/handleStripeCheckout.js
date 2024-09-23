import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PxHLlP3qhRd9vpVIZu0yVGDmBTekFoTs8UQZD3vbTuZe0QBiYztuipBC61i2cRr9xjPoYgpTgRWXnWOoHXjpIzx00CKfA36C4"
);

export const handleStripeCheckout = async (tourName, totalPrice) => {
  const stripe = await stripePromise;

  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tourName, totalPrice }),
  });

  const data = await response.json();

  const result = await stripe.redirectToCheckout({ sessionId: data.id });

  if (result.error) {
    alert(result.error.message);
  }
};
